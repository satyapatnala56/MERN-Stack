import React, { useEffect, useState } from "react";
import Header from "../Parts/Navbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Contain, LetsFlex } from "../Styles/styles";
import { Typography } from "@mui/material";
import AuctioningItems from "./AuctioningItems";
import styles from "./Admin.module.css";
import axios from "axios";
import ReactCard from "./ReactCard";

function Admin() {
  const [items, getItems] = useState([]);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [highest, setHighest] = useState(0);

  useEffect(() => {
    const fetchHandler = () => {
      axios.get("http://localhost:5500/auction").then((res) => {
        getItems(res.data);
      });
    };
    fetchHandler();
  }, []);

  useEffect(() => {
    const fetchUsers = () => {
      axios.get("http://localhost:5500/view").then((res) => {
        setUsers(res.data);
      });
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    let high = highest;
    items.forEach((i, ind) => {
      if (i.itemDetails.intial > high) {
        high = i.itemDetails.intial;
      }
    });
    if (high !== highest) setHighest(high);
  }, [items]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:5500/posts");
      const data = await response.json();
      setPosts((prev) => {
        const newPosts = [...data];
        return newPosts;
      });
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchAdmins = async () => {
      console.log(22);
      const response = await fetch("http://localhost:5500/admins");
      const data = await response.json();
      console.log(data);
      setAdmins(data);
    };
    fetchAdmins();
  }, []);

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
                Total Users : {users.length > 0 ? users.length : "Loading..."}
              </Typography>
              <Typography variant="caption" component="p">
                Users blacklisted: 0
              </Typography>
            </CardContent>
          </Card>
          <Card style={{ width: "80%" }}>
            <CardContent>
              <Typography variant="h5">Auction Items</Typography>
              {/* Auctioned items */}
              <Typography variant="caption" component="p">
                Total items : {items.length > 0 ? items.length : "Loading..."}
              </Typography>
              <Typography variant="caption" component="p">
                Highest priced : ${highest}
              </Typography>
              <Typography variant="caption" component="p">
                Items Sold: 0
              </Typography>
            </CardContent>
          </Card>
        </LetsFlex>
        <LetsFlex>
          <Card style={{ width: "80%" }}>
            <CardContent>
              <Typography variant="h5">Public Arts</Typography>
              {/* Auctioned items */}
              <Typography variant="caption" component="p">
                Total Uploads : {posts.length > 0 ? posts.length : "Loading..."}
              </Typography>
            </CardContent>
          </Card>
          <Card style={{ width: "80%" }}>
            <CardContent>
              <Typography variant="h5">Admins</Typography>
              {/* Auctioned items */}
              <Typography variant="caption" component="p">
                Admins : {admins.length > 0 ? admins.length : "Loading..."}
              </Typography>
            </CardContent>
          </Card>
        </LetsFlex>
      </Contain>
    </div>
  );
}

export default Admin;
