import {useContext, useState} from 'react';
import {LocationContext} from '../context/Locationcontext.jsx';
import food from '../images/food.jpg'

export const Location =  () => {
    const [address, setAddress] = useState("");
    const {get,isLoading} = useContext(LocationContext);
    const handleInput = (text) => {
      setAddress(text);
    };
  
    const handleClick = () => {
      get(address);
    };
    // "https://trueway-geocoding.p.rapidapi.com/Geocode?address=Glorinaa%20Valley&language=en";
    return (
      <>
      {isLoading ? (
       <div className="start_page">
       <div className="locate">
       <h1 className = "title">FOOD HUB</h1>

       <h2 className = "lines">Feeling Hungry?</h2>

       <h3 className="food_description">Order food from favourite restaurants near you.</h3>

       <input type="text" className = "input_text" placeholder = "Enter Your Delivery Location"
       onInput={(e) => handleInput(e.target.value)} />
       <button className = "btn"onClick={handleClick}>Click</button>
       </div>
       <div className="image">
         <img src={food} className = "food_img"/>
         </div>
     </div>
      ) : (
        <div className="start_page">
        <div className="locate">
        <h1 className = "title">FOOD HUB</h1>

        <h2 className = "lines">Feeling Hungry?</h2>

        <h3 className="food_description">Order food from favourite restaurants near you.</h3>

        <input type="text" className = "input_text" placeholder = "Enter Your Delivery Location"
        onInput={(e) => handleInput(e.target.value)} />
        <button className = "btn"onClick={handleClick}>Click</button>
        </div>
        <div className="image">
          <img src={food} className = "food_img"/>
          </div>
      </div>
      )}
    </>
    );
   }