import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserNav from "../parts/userNav";
import styles from "./Auction.module.css";
import AuctionCard from "./AuctionCard";
import AuctionHeader from "./AuctionHeader";


const Auction = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const socket = useSelector((state) => state.user.socket);
  const backend = useSelector((state) => state.user.backend);
  const [arts, setArts] = useState([]);

  useEffect(() => {
    const fetchAuctionItems = () => {
      axios.get(`${backend}/auctionItems`).then((data) => {
        console.log(data);
        setArts(data.data);
      });
    };
    fetchAuctionItems();
    socket.on('auction-update', data => {
      if(data.action === 'update'){
        console.log('i am listening')
        fetchAuctionItems()
      }
    })
  }, [socket]);


  const handleBid = (id) => {
    const art = arts.findIndex((art) => art._id === id);
    console.log(art);
    let bid = arts[art];
    bid.itemDetails.intial += bid.itemDetails.increment;
    bid.itemDetails.currentHolder = user.username;
    arts[art] = bid;
    axios.post(`${backend}/updateItem`, bid)
    .then((data) => {
      console.log(data);
      navigate("/auction");
    })
  };

  return (
    <>
      <UserNav />
      <div className={styles.auction}>
        <AuctionHeader />
        <h2 className="text-center">Today's Auction Arts</h2>
        <div className={`container ${styles.topLine}`}>
          {arts.map((art) => {
            return (
              <div key={art._id}>
                <AuctionCard art={art} bid={handleBid} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Auction;
