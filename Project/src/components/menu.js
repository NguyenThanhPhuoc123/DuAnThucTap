import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Outlet, Link } from "react-router-dom";
import { FaPhone } from 'react-icons/fa';
import '../App.css';
const menu=() => {
    return(
      <>
        <Navbar  expand="lg">
            <Container>
              <Navbar.Brand href="#home"><Link to="/" className=""><img
              alt=""
              src={require('../img/Little & Little Logo (ngang) 1.png')}
              className="d-flex align-item-top App-logo"
            /></Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="bg-link">
                <Nav className="me-auto">
                  <Nav.Link   href=""  ><Link  to="/"  style={{border: '2px solid white', borderRadius: '100px',padding:'15px'}} className=" nav-link1 example">Trang chủ</Link></Nav.Link>
                  {/* style={{border: '2px solid white', borderRadius: '100px',padding:'15px'}} */}
                  <Nav.Link  href=""  ><Link to="/event" style={{border: '2px solid white', borderRadius: '100px',padding:'15px'}} className="nav-link2 example"> Sự kiện</Link></Nav.Link>
                  <Nav.Link  href=""  ><Link to="/contact" style={{border: '2px solid white', borderRadius: '100px',padding:'15px'}} className=" nav-link3 example ">Liên hệ</Link></Nav.Link> 
                </Nav>
                 <a className='navbar-nav2'>
                  <FaPhone size={24} color="white" />  0123456789
                </a>
              </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet />
        </>
    )
};

export default menu;
