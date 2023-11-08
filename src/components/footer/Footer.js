import React from 'react'


import twitter from '../../img/1.png'
import facebook from '../../img/2.png'
import github from '../../img/4.png'
import instagram from '../../img/logo-instagram 1.png'
import icon  from '../../img/white japanes food img.png'
import pixal  from '../../img/pexels-ash-376464 1.png'
import pixal1  from '../../img/pexels-ella-olsson-1640772 1.png'
import evil  from '../../img/eiliv-aceron-d5PbKQJ0Lu8-unsplash 1.png'
import evil1  from '../../img/Mask group.png'
import './index.css'
import { Container } from 'react-bootstrap'
function Footer() {
  return (

      
      <div className="footer">
    <Container className='containersome'>
    <div className="box-container">
        <div className="box-footer">

        <div className="icon-parent" style={{justifyContent:"flex-start"}}>
          <img src={icon} style={{color:"white"}} alt="" />
      <p>Bistro Bliss</p>
          </div>
        
            <p>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>

            <div className="icons d-flex gap-2">
                <a href="">


                <img src={facebook} alt="" />
                </a>

                <a href="">

                <img src={github} alt="" />
                </a>
                <a href="">

                <img src={twitter} alt="" />
                </a>
                <a href="">

<img src={facebook} alt="" />
</a>

            </div>
        </div>
        <div className="box-footer">
           
            <h3 className='footer-tag'>Pages</h3>

            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Menu</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <a href="#">Delivery</a>      
 
        </div>
        <div className="box-footer">

      
            <h3 className='footer-tag'>Utility Pages</h3>
            <a href="#">Start Here</a>
            <a href="#">Styleguide</a>
            <a href="#">Password Protected</a>
            <a href="#">404 Not Found</a>
            <a href="#">Licenses</a>
            <a href="#">Changelog</a>
            <a href="#">View More</a>
        
  
        </div>

        <div className="box-footer">
            <h3 className='footer-tag'>Follow Us On Instagram</h3>
            <div className="grid-colum">
                <img src={evil} alt="" />
                <img src={pixal} alt="" />
                <img src={pixal1} alt="" />
                <img src={pixal} alt="" />
            </div>
        
        </div>



  
    </div>
    </Container>
{/* <h1 className="credit"> &copy; copy right @ 2021 by Mr designer </h1> */}

</div>
  )
}

export default Footer
