import React, { useState } from "react";
import OurMenu from "./OurMenu";

function Category({ category, filterItems }) {

    const [selectedButton, setSelectedButton] = useState(null);


    const handleButtonClick = (cat)=>{

        setSelectedButton(cat);

        filterItems("category" , cat)
    }

    return (
   
   
   
   <div className="btn-container">

{category.map((cat, index)=>{
    return   <button 
    className={`filter-btn ${selectedButton === cat ? 'active' : ''}`}
    onClick={() => handleButtonClick(cat)}
    key={index}
>
    {cat}
</button>

})}

    
</div>







)

}

export default Category;




// import React from "react";
// import OurMenu from "./OurMenu";

// function Category({ category, filterItems }) {
//     return (
//         <div className="btn-container">

// {category.map((cat, index) => (
//                 <button 
//                     className='filter-btn' 
//                     onClick={() => filterItems('category', cat)} 
//                     key={index}
//                 >
//                     {cat}
//                 </button>
//             ))}
//     </div>
// )

// }

// export default Category;