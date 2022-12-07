import React, { useState } from "react";
import Navbar from "../Parts/Navbar";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Button from "react-bootstrap/Button";
import FormModal from "./FormModal";
function Auction() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div style={{ backgroundColor: "#d1d1d1" }}>
      <Navbar />

      <Card style={{ margin: 20 }}>
        <Typography variant="h5" style={{ padding: 20 }}>
          Available arts for Auction
        </Typography>

        <Button variant="success" onClick={() => setShowForm(true)}>
          Add Auction Item
        </Button>
        {showForm && <FormModal func={setShowForm} />}
      </Card>
    </div>
  );
}

export default Auction;
