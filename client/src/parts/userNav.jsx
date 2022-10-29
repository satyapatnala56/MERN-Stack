import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';

function UserNav() {
  return (
            <Navbar sticky="top" collapseOnSelect expand="lg" bg='dark' variant='dark'>
    <Container>
      <Navbar.Brand  href="/user">Take-Art-to-Heart</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        {/* <Nav.Link>Auction</Nav.Link> */}

        </Nav>
        <Nav>
          <Nav.Link href='user/home'>
          <NotificationsNoneIcon color='inherit' title='Notifications' />
          </Nav.Link>
          <Nav.Link>
          <MailOutlineIcon color='inherit' />
            
            </Nav.Link>
            <Nav.Link href='save'>
          <FavoriteBorderIcon color='inherit' />
            
            </Nav.Link>
          {/* <Nav.Link>
          <AccountCircleIcon color='inherit' />
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            </Nav.Link> */}
                <Dropdown align='end'>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
      <AccountCircleIcon color='inherit' />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="profile">Profile</Dropdown.Item>
        <Dropdown.Item href="myarts">My Arts</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Auction</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Become a Seller</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-3">Help & Support</Dropdown.Item>
        <Dropdown.Item href="settings">Settings</Dropdown.Item>
        <Dropdown.Item href="/">Log Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default UserNav