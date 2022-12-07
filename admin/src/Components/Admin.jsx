import React from "react";
import Header from "../Parts/Navbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Contain, LetsFlex } from "../Styles/styles";
import { Typography } from "@mui/material";
import AuctioningItems from "./AuctioningItems";
import styles from './Admin.module.css'

function Admin() {

  

  return (
    <div style={{ backgroundColor: "#d1d1d1" }}>
      <Header />
      <Contain>
        <Card
          style={{
            padding: 20,
            backgroundColor: "rgb(133 133 133)",
            color: "#fbe697",
          }}
        >
          <h1>Hello Admin !!</h1>
          <p>Let's improve the productivity together.</p>
        </Card>
        <LetsFlex>
          <Card style={{ width: "80%" }}>
            <CardContent>
              <Typography variant="h5">Users</Typography>
              <Typography variant="caption" component="p">
                New Users : 56
              </Typography>
              <Typography variant="caption" component="p">
                No of logins : 256
              </Typography>
              <Typography variant="caption" component="p">
                User Reports : 5
              </Typography>
              <Typography variant="caption" component="p">
                Post Reports : 5
              </Typography>
            </CardContent>
          </Card>
          <Card style={{ width: "80%" }}>
            <CardContent>
              <Typography variant="h5">Items at Auction</Typography>
              {/* Auctioned items */}
              <Typography variant="caption" component="p">
                Total items : 6
              </Typography>
              <Typography variant="caption" component="p">
                Bidded atleast once : 4
              </Typography>
              <Typography variant="caption" component="p">
                No one bidded still : 2
              </Typography>
              <Typography variant="caption" component="p">
                Highest priced : $520
              </Typography>
            </CardContent>
          </Card>
        </LetsFlex>
        <AuctioningItems />
        <button className={styles.add}>uwu</button>
      </Contain>
    </div>
  );
}

export default Admin;

/*
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
*/
