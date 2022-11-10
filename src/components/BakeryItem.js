// TODO: create a component that displays a single bakery item

import { useState } from "react"

// METHOD 1
// export default function BakeryItem(props){
//     //see here how you are able to pass in a paramter and you do not have to tell it what the paramter is
//     const name = props.name;
//     const price = props.price;
//     return (
//         // You can also just pass in the props.name and props.price 
//         // and it will work the same way. You do not have to make a name
//         <div>
//             {name}
//             {price}
//         </div>
//     )


    
// }

// METHOD NUMBER 2 WE ARE DECONSTRUCTING THE LIST
export default function BakeryItem({name,price, description, image, addItem}){
    //see here how you are able to pass in a paramter and you do not have to tell it what the paramter is
   
    return (
        // You can also just pass in the props.name and props.price 
        // and it will work the same way. You do not have to make a name
        <div>
            <h2> {name} </h2>
            <img src= {image}/>
            <h3>{price}</h3>
            {description}
            
            <button onClick={() => addItem(name,price)} > ADD TO CART</button>

        </div>
    )
    
}