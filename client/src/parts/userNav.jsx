import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";

function UserNav() {
  const user = useSelector((state) => state.user.user);

  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/user" className="nav-item">
            Take-Art-to-Heart
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Dropdown.Item>
              <Link to="/public" className="nav-item">
                Public
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/auction" className="nav-item">
                Auction
              </Link>
            </Dropdown.Item>
          </Nav>
          <Nav>
            <Nav.Link href="user/home">
              <NotificationsNoneIcon color="inherit" title="Notifications" />
            </Nav.Link>
            <Nav.Link>
              <MailOutlineIcon color="inherit" />
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/save">
                <FavoriteBorderIcon color="inherit" />
              </Link>
            </Nav.Link>
            <Dropdown align="end">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                <AccountCircleIcon color="inherit" />
                {user.username}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/profile">Profile</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/myarts">My Arts</Link>
                </Dropdown.Item>
                {/* <Dropdown.Item href="myarts">My Arts</Dropdown.Item> */}
                <Dropdown.Item href="#/action-1">Auction</Dropdown.Item>
                {/* <Dropdown.Item href="#/action-2">Become a Seller</Dropdown.Item> */}
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Help & Support</Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/settings">Settings</Link>
                </Dropdown.Item>

                {/* <Dropdown.Item href="settings">Settings</Dropdown.Item> */}
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Link to="/">Log Out</Link>
                </Dropdown.Item>

                {/* <Dropdown.Item href="/">Log Out</Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default UserNav;
