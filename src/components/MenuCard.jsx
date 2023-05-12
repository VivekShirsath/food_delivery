import { useContext } from "react";
import { CartContext } from "../context/cartcontext";



export const MenuCard = (props) => {
    // console.log(props?.card?.card)
   const {addToCart} = useContext(CartContext);
   const {cartItems} = useContext(CartContext);
   const {removeCart} = useContext(CartContext);
   let itemsArray = props?.card?.card?.itemCards;
  const title = props.title.card.card.name;
    return (
        <>
        <h3>{props.card.card.title}</h3>
         { itemsArray?.map(({card}) => { 
            return (
                <div className= "menu_details">
                    <div className= "menu_info" key = {card.info.imageId}>
                        <div className= "menu_info_name">{card.info.name}</div>
                        <div className= "menu_info_price">₹{card.info.price/100}</div>
                        <div className = "menu_info_description">{card.info.description}</div>
                    </div>
                    
                    <div className = "side_details">
                    <img className="menu_image" src = {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+ card.info.imageId}/>     
                    <div className = "main_btn"> 
                      {cartItems.find(item => item.id === card.info.id)?.quantity == null  ?

                        <div className = "add"
                        onClick = {() => {
                            addToCart({...card.info},title) }}>
                            Add
                            </div> :
                                 
                        <div className= "plusminus">
                            <span
                             onClick = {() => {removeCart({...card.info})}}>
                                -
                                </span>
                            <span>{cartItems.find(item => item.id === card.info.id)?.quantity}</span>
                            <span
                              onClick = {() => {addToCart({...card.info},title)}}
                            >
                                +
                             </span></div>
         }
                        </div>
                    </div>
                    
                </div>
            )})    
            }
            
            <div className="border"></div>
        </>
    )
};