import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "./AuctionModal.module.css";

const AuctionModal = (props) => {
  return (
    <Modal show={props.show} onHide={() => props.setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{props.details.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Yooo! Just a one more step before bidding for this art
        <br />
        <b>Below are the current details about present hold</b>
        <br />
        <div className={styles.info}>
          <label>Current Holder: </label>
          <b>{props.details.itemDetails.currentHold}</b>
        </div>
        <div className={styles.info}>
          <label>Current Amount:</label>
          <b>{props.details.itemDetails.currentBid}</b>
        </div>
        <div className={styles.info}>
          <label>Bid Increment:</label>
          <b>{props.details.itemDetails.bidIncrement}</b>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => props.setShow(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={() => props.setShow(false)}>
          Bid Now
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AuctionModal;
