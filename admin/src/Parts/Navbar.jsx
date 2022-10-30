import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dropdown from 'react-bootstrap/Dropdown';

function Header() {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg='dark' variant='dark'>
    <Container>
      <Navbar.Brand  href="/admin">Take-Art-to-Heart</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href='auction'>Auction</Nav.Link>
          <Nav.Link href='users'>Users</Nav.Link>
          <Nav.Link href='arts'>Arts</Nav.Link>
        </Nav>
        <Nav >
        <Dropdown align='end'>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
      <AccountCircleIcon color='inherit' />Karthik
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="arts">Arts</Dropdown.Item>
        <Dropdown.Item href="users">Users</Dropdown.Item>
        <Dropdown.Item href="auction">Auction</Dropdown.Item>
        {/* <Dropdown.Item href="#/action-2">Become a Seller</Dropdown.Item> */}
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-3">Help & Support</Dropdown.Item>
        <Dropdown.Item href="settings">Settings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="/">Log Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          {/* <Register open={sign} handleClose={handleSign} /> */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header