import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import Menu from './Menu/Menu'
import HealthyFood from './healthy/HealthyFood'
import Buttons from './components/button/Buttons'
import Service from './Service/Service'
import FastFood from './Fastfood/FastFood'
import CarouselMov from './carousel/Carousel'

function Home() {
  return (

    <>
    <div className="home">
      <Container className='containerone'>
      <div className="d-flex justify-content-center align-items-center flex-column " style={{height:"850px" }}>

      <h1  className='home-tag' style={{fontSize:"100px",  fontFamily: 'Playfair Display ',  }}>Best food for <br/> your taste</h1>

      <p className='text-color' style={{fontSize:"20px",}}>Discover delectable cuisine and unforgettable moments <br/> in our welcoming, culinary haven.</p>

      <div className="buttons-parent">

      <Buttons 
        classNames="red-color"
        borderRadius="118px" 
        background="#AD343E" 
        color="#FFFFFF"
      >
        Book A Table 
      </Buttons>





<Buttons 
        classNames="white-color"
        borderRadius="118px"
        border="3px solid #2C2F24"
        background="white"
        color="#182226"
      >
        Explore Menu
      </Buttons>
      </div>
      </div>
      
      







    </Container>
      </div>

<Menu/>
<HealthyFood/>
<Service/>
<CarouselMov/>
<FastFood/>

    </>

  )
}

export default Home
