import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js"
/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [count, setCount] = useState(0);
  const[cart, addCart] = useState([])
  const space = "\n"

  const addItem = (item,price) => {
    addCart([...cart,item])
    setCount(count + price)
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <h3>
        total : {count}
      </h3>
    
      <h4>
        cart items: {cart} {space}
      </h4>
     
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem       name = {item.name} 
                          price = {item.price} 
                          description = {item.description}
                          image = {item.image}
                          addItem = {addItem}/>
      ))}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
      </div>
    </div>
  );
}

export default App;
