import React from 'react'
import SidebySide from "../components/Two Images Side by side/SidebySide";
import FastFoodIMG from'../img/FastFoodimg.png'
import CartIcon from '../img/CartIcon.png'
import CartIcon1 from '../img/Carticon1.png'
import CartIcon3 from '../img/Carticon3.png'
import './FastFood.css'
function FastFood() {

    const customContent = (
        <div className="">
            <div className="   imagesNow d-flex gap-3">
                <img className='iconimages' src={CartIcon} alt="CartIcon" />
                <p>Delivery within 30 minutes</p>
            </div>
    
            <div className="imagesNow d-flex  gap-3">
                <img className='iconimages' src={CartIcon1} alt="CartIcon1" />
                <p>Best Offer & Prices</p>
            </div>
            <div className="imagesNow d-flex  gap-3">
                <img  className='iconimages' src={CartIcon3} alt="CartIcon3" />
                <p>Online Services Available</p>
            </div>
        </div>
    )



  return (
   
<SidebySide 
  title="Fastest Food  Delivery  in City"
paragraphOne="Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop
"
customDiv={customContent}
images={FastFoodIMG }




/>


  )
}

export default FastFood
