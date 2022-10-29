import React from 'react'
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Register from '../components/Register'
import SignIn from '../components/SignIn'
// import { WhiteP } from '../stlying/styles';
// import {dark,white,lightwhite} from '../stlying/colors'

function Head() {
  // const navigate = useNavigate()
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
    // navigate('home')
  };
  const handleClose = () => {
    setOpen(false);
    // navigate('home')
  };

  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg='dark' variant='dark'>
    <Container>
      <Navbar.Brand  href="/">Take-Art-to-Heart</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        {/* <Nav className="me-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
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
        </Nav> */}
        {/* <Form className="d-flex me-auto" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        <Nav >
          <Nav.Link href='seller' >Become a seller</Nav.Link>
          {/* <Nav.Link href="login" >Sign In</Nav.Link> */}
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