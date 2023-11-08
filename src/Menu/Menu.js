import React from 'react'
import Group1 from '../img/Group 1.png'
import Vector from '../img/Vector.png'
import  Vector1 from '../img/Vector (1).png'
import  Group from '../img/Group.png'
import './Menu.css'

function Menu() {
  return (
    <div className='menu'>


<div className="menu-flex">
    <h1 className='title' >Browse Our Menu</h1>

    <div className="flex-container d-flex justify-content-center align-ite  ms-center text-center   flex-wrap " style={{gap:"30px"}}>
        <div className='box'> 

        <div className="image-background">
            <img src={Vector} alt="" />
            </div>
      

            <p className='span-tag ' >Breakfast</p>
            <p >In the new era of technology we look in the future with certainty and pride for our life.</p>
            <span style={{color:"#AD343E"}}>Explore Menu</span>
   
        </div>


        <div className="box">
     
            <div className="image-background">
            <img src={Group1} alt="" />
                </div>    


            <p className='span-tag'>Main Dishes</p>
            <p className='paragraph'>In the new era of technology we look in the future with certainty and pride for our life.</p>
            <span style={{color:"#AD343E"}}>Explore Menu</span>
        </div>
        <div className="box">
        <div className="image-background">
            <img src={Vector1} alt="" />
            </div>
            <p className='span-tag'>Drinks</p>
            <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
            <span style={{color:"#AD343E"}}>Explore Menu</span>
        </div>
        <div className="box">
        <div className="image-background">
            <img src={Group} alt="" />
            </div>
            <p className='span-tag'>Desserts</p>
            <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
            <span style={{color:"#AD343E"}}>Explore Menu</span>
        </div>
    </div>



      
</div>
    </div>
  )
}

export default Menu
