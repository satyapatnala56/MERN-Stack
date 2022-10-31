import React, { useState } from "react";
import styles from "./Auction.module.css";
import AuctionModal from "./AuctionModal";

const AuctionCard = (props) => {
  const [aucModal, setAucModal] = useState(false);


  return (
    <div className={`card ${styles.cardEffects} ${styles.cardWidth}`}>
      <AuctionModal show={aucModal} setShow={setAucModal} details={props.art}/>
      <div className={`card-info`}>
        <div className="card-front">
          <img src={props.art.url} className={styles.cardImage} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.art.title}</h5>
            <h6 className="card-title">Art by {props.art.artist}</h6>
            <p className="card-text">{props.art.desc}</p>
          </div>
        </div>
      </div>
      <button type="button" className={styles.bidNow} onClick={() => setAucModal(true)}>
        Bid Now
      </button>
    </div>
  );
};

export default AuctionCard;
