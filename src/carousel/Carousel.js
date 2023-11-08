import React, { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import GroupFriends  from '../img/group-friends-eating-restaurant 1.png'
import kabab  from '../img/kebab-set-table 1.png'
import Group from '../img/group-friends-eating-restaurant 1.png'
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import './index.css'
import { useNavigate } from 'react-router-dom'



function Service() {
    
//     const carouselContainer = useRef()


    
//   const navigation =(dir)=>{
//     const container = carouselContainer.current;
    
//     const scrollAmount = dir === "left" ?
//       container.scrollLeft - (container.offsetWidth + 20) :
//       container.scrollLeft + (container.offsetWidth + 20);
    
//     container.scrollTo({
//       left: scrollAmount,
//       behavior: 'smooth',
//     });
    
//       }
    
//   return (

//     <>

//     <div className="ServiceN">

    
//     <Container className='containerSomeN' >
//         <h2 className='ServiceTagN'>We also offer unique <br/> services for your events</h2>
    
    
//         <BsFillArrowLeftCircleFill
//                     className="carouselLeftNav arrow"
//                     onClick={() => navigation("left")}
//                 />
//                 <BsFillArrowRightCircleFill
//                     className="carouselRighttNav arrow"
//                     onClick={() => navigation("right")}
//                 />



// <div className="carouselItems" ref={carouselContainer}>


// <div className="carouselItem">
  

//   <div className="posterBlock">
//         <img src={kabab}  className='img-fluid' alt="" />
//   </div>




//             <h3>Events</h3>
//             <p>In the new era of technology we look in the future with certainty for life.</p>


//         </div>
// <div className="carouselItem">
// <div className="posterBlock">
//         <img src={Group}  className='img-fluid' alt="" />
//   </div>

//             <h3>Events</h3>
//             <p>In the new era of technology we look in the future with certainty for life.</p>
//         </div>
// <div className="carouselItem">
// <div className="posterBlock">
//         <img src={Group}  className='img-fluid' alt="" />
//   </div>

//             <h3>Events</h3>
//             <p>In the new era of technology we look in the future with certainty for life.</p>
//         </div>


//         <div className="carouselItem">
  
//         <div className="posterBlock">
//         <img src={kabab}  className='img-fluid' alt="" />
//   </div>

//             <h3>Events</h3>
//             <p>In the new era of technology we look in the future with certainty for life.</p>
//         </div>

//         <div className="carouselItem">
//         <div className="posterBlock">
//         <img src={Group}  className='img-fluid' alt="" />
//   </div>


//             <h3>Caterings</h3>
//             <p>In the new era of technology we look in the future with certainty for life.</p>
//         </div>

//         <div className="carouselItem">
  
//         <div className="posterBlock">
//         <img src={Group}  className='img-fluid' alt="" />
//   </div>

//             <h3>Caterings</h3>
//             <p>In the new era of technology we look in the future with certainty for life.</p>
//         </div>

//         <div className="carouselItem">
//         <div className="posterBlock">
//         <img src={Group}  className='img-fluid' alt="" />
//   </div>

//             <h3>Caterings</h3>
//             <p>In the new era of technology we look in the future with certainty for life.</p>
//         </div>

        
//         <div className="carouselItem">
  
//         <div className="posterBlock">
//         <img src={kabab}  className='img-fluid' alt="" />
//   </div>

//             <h3>Caterings</h3>
//             <p>In the new era of technology we look in the future with certainty for life.</p>
//         </div>
        
//         <div className="carouselItem">
  
//         <div className="posterBlock">
//         <img src={Group}  className='img-fluid' alt="" />
//   </div>


//             <h3>Caterings</h3>
//             <p>In the new era of technology we look in the future with certainty for life.</p>
//         </div>

// </div>
//     </Container>
//     </div>
    // </>
  // )
}

export default Service
