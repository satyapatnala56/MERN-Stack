import React from "react";
import "./ReactCard.css";

const ReactCard = (props) => {
  return (
    <div className="card">
      <h2>{props.data.title}</h2>
      <h3>{props.data.artist}</h3>
      <img src={props.data.url} alt="art" />
      <p>CurrentHolder: {props.data.itemDetails.currentHolder}</p>
      <p>CurrentValue: {props.data.itemDetails.intial}</p>
    </div>
  );
};

export default ReactCard;
