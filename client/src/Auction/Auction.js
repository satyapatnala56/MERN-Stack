import React from "react";
import UserNav from "../parts/userNav";
import styles from "./Auction.module.css";
import AuctionCard from "./AuctionCard";
import AuctionHeader from "./AuctionHeader";

const DUMMY_ARTS = [
  {
    id: 1,
    title: "Dream Girl",
    artist: "Abhilaash",
    desc: "Art of my dream love, Drawn with passion and so much dedication",
    url: "https://i.pinimg.com/originals/d2/f5/be/d2f5beacd5370732f63f40030225cc7f.jpg",
    itemDetails: {
      currentHold: 'Galaxy',
      currentBid: 2000,
      bidIncrement: 200
    }
  },
  {
    id: 2,
    title: "A House in Wild Area",
    artist: "Galaxy",
    desc: "Always passioned about living in a house which is far away from anyone, mixed some wildness to make it look scary",
    url: "http://test.ultralinx.co/wp-content/uploads/2020/02/1_photo-41-14-04-17-23-22-30-5927202af41e7__880.jpg",
    itemDetails: {
      currentHold: 'Harshini',
      currentBid: 4000,
      bidIncrement: 1000
    }
  },
  
];

const Auction = () => {
  return (<>
  <UserNav />
     <div className={styles.auction}>
      <AuctionHeader />
      <h2 className="text-center">Today's Auction Arts</h2>
      <div className={`container ${styles.topLine}`}>
        {DUMMY_ARTS.map((art) => {
          return (
            <>
              <AuctionCard art={art} />
            </>
          );
        })}
      </div>
    </div>
  </>
  );
};

export default Auction;
