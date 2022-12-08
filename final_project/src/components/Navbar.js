import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {

  return (
    <>
      <Navbar  className='edonis'>
        <Container >
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav  className='d-flex justify-content-around' >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#po">Our Guide</Nav.Link>
            <Nav.Link href="#nm">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default Header;