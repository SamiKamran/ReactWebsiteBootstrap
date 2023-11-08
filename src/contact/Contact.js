import React from 'react'

import './index.css'
import  mapImages from '../img/image 112.png'
import { Container } from 'react-bootstrap'
function Contact() {
  return (

<div className='contact-parent'>
    <Container className='container-contact'>



        <div className="content-wrapper">

<h1>Contact Us</h1>
<p>We consider all the drivers of change gives you the components <br/> you need to change to create a truly happens.</p>


        </div>

<section className="contact" id="contact">


    <form action="">



<div className="inputbox">
    <div className="content-form">

    <label >Name</label>
    <input type="text" placeholder='Enter your Name'  required />
  
    </div>

<div className="content-form">

    <label >Email</label>
    <input type=
    "email" required  placeholder='Enter your Email'/>
</div>
    </div>







<div className="inputbox-percent">
    <label >Subject</label>
    <input type="text" placeholder='Subject' />
</div>

<div className="inputbox-percent-messages">
    <label >Messages</label>
    <textarea
    
          name="messages"
          rows="4"
          cols="50"
          placeholder="Write Your Messages"

        ></textarea>
</div>



<div className="inputbox-percent">
    <button className="btn">
        Submit
    </button>
</div>





    </form>



</section>
    
    </Container>

<div className="map-image">
<img src={mapImages} alt="" />
</div>


</div>
  )
}

export default Contact
