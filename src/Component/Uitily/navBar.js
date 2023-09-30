
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../images/logo.png';

// react library
import { Link } from 'react-router-dom';
// icons
import { FaSalesforce , FaCartPlus , FaSignInAlt } from "react-icons/fa";
// FaCartPlus
// import { Nav } from 'react-bootstrap';
const NavBarSite = () => {
    return (
      <Navbar expand="lg" variant='dark' className="bg-dark" style={{direction: 'ltr'}}>
      <Container fluid>
        <Navbar.Brand href="#" style={{fontSize: '25px'}}> <Link to='/' style={{color : '#fff'}}><Nav.Link href="#a0" className='logo'><img src={Logo} className='login-img '/></Nav.Link></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='text-center'>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/cart' style={{textDecoration : 'none',direction : 'rtl'}}><Nav.Link href="#a1"><FaCartPlus/> العربة </Nav.Link></Link>
          </Nav>

          <Form className="d-flex" style={{justifyContent : 'center' , alignItems : 'center', gap : '5px'}}>
            <Form.Control
              type="text"
              placeholder="بحث"
              className="me-2 text-center"
              aria-label="Search"
              style={{width : '50vw'}}
            />
            {/* <Button variant="outline-success" style={{border: "none"}}> <FaSistrix/> </Button> */}
           
          </Form>
        </Navbar.Collapse>
        <Link to='/signIn' className='mx-2' style={{textDecoration : 'none',direction : 'rtl' , color: '#fff'}}>
            <Nav.Link href="#a2" className='d-flex justify-content-center align-item-center gap-1'>
                <span><FaSignInAlt/></span>
                <span>تسجيل الدخول</span>
            </Nav.Link>
          </Link>
      </Container>
    </Navbar>
      );
}

export default NavBarSite;