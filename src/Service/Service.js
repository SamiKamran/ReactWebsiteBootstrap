import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import GroupFriends  from '../img/group-friends-eating-restaurant 1.png'
import kabab  from '../img/kebab-set-table 1.png'
import Restaurants from '../img/restaurant-interior.jpg'
import './index.css'


function Service() {
  return (

    <>

    <div className="Service">

    
    <Container className='containerSome' >
        <h2 className='ServiceTag'>We also offer unique <br/> services for your events</h2>
      <Row  className=''>
        <Col  >
        <div className="boxes">
        <img src={GroupFriends} className='img-fluid' alt="" />
            <h3>Caterings</h3>
            <p>In the new era of technology we look in the future with certainty for life.</p>
        </div>
        </Col>
        <Col  >
        <div className="boxes">
  
        <img src={kabab}  className='img-fluid' alt="" />

            <h3>Restaurant</h3>
            <p>In the new era of technology we look in the future with certainty for life.</p>
        </div>
        </Col>
        <Col  >
        <div className="boxes">
            <img src={GroupFriends} className='img-fluid' alt="" />
            <h3>Caterings</h3>
            <p>In the new era of technology we look in the future with certainty for life.</p>
        </div>
        </Col>
        <Col  >
        <div className="boxes">
            <img src={kabab} className='img-fluid' alt="" />
            <h3>Events</h3>
            <p>In the new era of technology we look in the future with certainty for life.</p>
        </div>
        </Col>
      </Row>

    </Container>
    </div>
    </>
  )
}

export default Service
