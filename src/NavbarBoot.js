import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import icon  from './img/japanese-food.png'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function NavbarBoot() {
  const expand = 'sm';

  return (
    <div>


      <Navbar expand={expand} className=" pb-3 py-3 " style={{background:"#ffff"}}  >
        <Container className='mx-auto w-80 justify-content-between'  >
          <div className="icon-parent">
          <img src={icon} alt="" />
      <p>Bistro Bliss</p>
          </div>
        


          <Navbar.Toggle className='mx-4' aria-controls= {`offcanvasNavbar-expand-${expand}`} />

          <Navbar.Offcanvas
              className="flex-grow-0"
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton className='mx-3 my-3'>
   
   
            </Offcanvas.Header>


     
              <Nav className=" gap-3 paddingNow" >
                <Link  to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
              

              </Nav>
  
          </Navbar.Offcanvas>

      


        </Container>
      </Navbar>





    </div>



  );
}

export default NavbarBoot;
