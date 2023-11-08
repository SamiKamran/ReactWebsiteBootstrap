import React from "react";
import HealthyImages from "../img/img.png";
import "./index.css";

import SidebySide from "../components/Two Images Side by side/SidebySide";

function HealthyFood() {
  return (

<SidebySide 
title="We provide healthy
food for your family."
subTitle="food for your family."
paragraphOne="Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate."
paragraphTwo="At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event."
images={HealthyImages}
titleBtn="More About Us"



/>
  );
}

export default HealthyFood;
