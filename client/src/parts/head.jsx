import React from 'react'
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Register from '../components/Register'
import SignIn from '../components/SignIn'

function Head() {
  const [open, setOpen] = React.useState(false);
  const [sign,setSign] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickSign = () => {
    setSign(true);
  };
  const handleSign = () => {
    setSign(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg='dark' variant='dark'>
    <Container>
      <Navbar.Brand  href="/">Take-Art-to-Heart</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav >
          <Nav.Link href='seller' >Become a seller</Nav.Link>
          <Nav.Link onClick={handleClickOpen}>Sign In</Nav.Link>
          <Nav.Link onClick={handleClickSign}>
           Register
          </Nav.Link><SignIn open={open} handleClose={handleClose} />
          <Register open={sign} handleClose={handleSign} />
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Head