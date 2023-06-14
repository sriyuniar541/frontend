import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import foto_lappan from '../../aset/lappan.jpg'

function NavbarHome() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" >
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src={foto_lappan}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           LAPPAN
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " className='justify-content-end'>
          <Nav>
            <Nav.Link href="#home me-5" className='me-lg-5'>Home</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sejarah</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Pendiri</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHome;