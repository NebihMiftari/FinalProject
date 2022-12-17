import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {

  return (
    <>
      <Navbar  className='navbar sticky-top bg-light bg-opacity-50 fs-5 font-poppins '>
        <Container   className='text-danger'>
          <Navbar.Brand href="#si">Games</Navbar.Brand>
          <Nav  className='d-flex justify-content-around text-danger' >
            <Nav.Link className='mx-4 text-dark' href="#si">Home</Nav.Link>
            <Nav.Link  className="text-dark " href="#po">Games</Nav.Link>
            <Nav.Link  className='mx-3 text-dark'href="#nm">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default Header;