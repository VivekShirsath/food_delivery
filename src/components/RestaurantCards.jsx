import { FaStar } from "react-icons/fa";

const RestaurantCards = ({name,cloudinaryImageId,cuisines,deliveryTime,avgRating,costForTwoString
 
}) => {
    let color = avgRating > 4 ? "rgb(65, 170, 65)" : "orange";
    return (
        <div className = "cards">
        <img src = {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
        + cloudinaryImageId
    }/>
        <div className = "name">{name}</div>
        <div className = "cuisine">{
            cuisines?.slice(0,2).join(" ")
        }</div>
        <div className = "info">
            <div className = "ratings">
            <span className = "icon" style = {{color}}>
            <FaStar/>
            </span>
            <span>{avgRating}</span>
            </div>
         
         <span>{deliveryTime} minutes</span>
         <span>{costForTwoString}</span>
         </div>
        </div>
    // )
    )};

  export default RestaurantCards;