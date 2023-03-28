import React, { useState, useEffect } from "react";
import Navbar from "../Parts/Navbar";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";
import Button from "react-bootstrap/Button";
import FormModal from "./FormModal";
import axios from "axios";
import { LetsFlex } from "../Styles/styles";

function Auction() {
  const [showForm, setShowForm] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchHandler = () => {
      axios.get("http://localhost:5500/auction").then((res) => {
        setItems(res.data);
      });
    };
    fetchHandler();
  }, []);

  return (
    <div style={{ backgroundColor: "#d1d1d1" }}>
      <Navbar />

      <Card style={{ margin: 20 }}>
        <Typography variant="h5" style={{ padding: 20 }}>
          Available arts for Auction
        </Typography>

        <LetsFlex style={{ flexWrap: "wrap" }}>
          {items.map((item) => {
            return (
              <Card style={{ width: "30%", height: "400px" }}>
                <h2 style={{ padding: "5px" }}>{item.title}</h2>
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ height: "50%", width: "40%", margin: "auto" }}
                    src={item.url}
                    alt={item.title}
                  />
                  <div style={{ display: "flex" }}>
                    Artist:
                    <span style={{ fontWeight: "bold", marginLeft: "3px" }}>
                      {item.artist}
                    </span>
                  </div>
                  <div style={{ display: "flex" }}>
                    Current Bid Holder:{" "}
                    <span style={{ fontWeight: "bold", marginLeft: "3px" }}>
                      {item.itemDetails.currentHolder}
                    </span>
                  </div>
                  <div style={{ display: "flex" }}>
                    Current Bid Amount:{" "}
                    <span style={{ fontWeight: "bold", marginLeft: "3px" }}>
                      {item.itemDetails.intial}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </LetsFlex>

        <Button
          variant="success"
          style={{ margin: "10px" }}
          onClick={() => setShowForm(true)}
        >
          Add Auction Item
        </Button>
        {showForm && <FormModal func={setShowForm} />}
      </Card>
    </div>
  );
}

export default Auction;
