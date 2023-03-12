import React from "react";
import styles from "./Auction.module.css";

const AuctionHeader = (props) => {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6">
        <img
          src="https://media.istockphoto.com/photos/gavel-on-auction-word-picture-id917901978?k=20&m=917901978&s=612x612&w=0&h=NULGu8-bVpy28gbW6AZbZlEVra-Q4s2rg607emPfkCs="
          className={styles.auctionPic}
          alt="auctionBan"
        />
      </div>
      <div className="auc col-lg-6 col-md-6">
        <h1>Auction</h1>
        <p>
          An auction is a sales event where in potential buyers place
          competitive bids on assets or services either in an open or closed
          format. Auctions are popular because buyers and sellers believe they
          will get a good deal buying or selling assets. An auction is a sale in
          which buyers compete for an asset by placing bids.
        </p>
        <div>
          <h4>Want to participate in auction?</h4>
          <a href="/">
            <button className="btn btn-primary">
              Register as a Bidder Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuctionHeader;
