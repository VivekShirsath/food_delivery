import { useContext } from "react";
import { CartContext } from "../context/cartcontext";
import {Header} from './Header';

export const Cart = () => {
    const {cartItems} = useContext(CartContext);
   const {removeCart} = useContext(CartContext);
   const {addToCart} = useContext(CartContext);
   const {totalPrice} =  useContext(CartContext);
    return(
        <>
         <Header />
        {
            cartItems.length === 0 ? 
            <>
            <img className = "cart_empty_img" src= "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"></img>
            <div className = "cart_empty_msg">Your Cart is Empty</div>
            </>
            :
           <div className="cartList">
           <h2 style = {{fontSize : "20px"}}>Cart Details</h2>
              {
                cartItems?.map(({id,name,price,quantity,title,imageId}) => {
                    return(
                        <>
                        <div className = "cart_details">
                        <div className="item_name">{name}</div>
                            <img className="food_image" src = {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+ imageId}/>

                        <div className="cart_btn">
                            <div className= "plusminus">
                            <span
                             onClick = {() => {removeCart({id,name,price})}}>
                                -
                                </span>
                            <span>{quantity}</span>
                            <span
                              onClick = {() => {addToCart({id,name,price})}}
                            >
                                +
                             </span></div>
                             </div>
                            <div className = "item_price">₹{price * quantity/100}</div>
                        </div>
                        </>
                    )
                })
              }
              <hr></hr>
              <div className="pay_details">
              <div>To Pay : </div>
              <div>₹{totalPrice/100}</div>
              </div>
           </div>
        }
        </>
    )
}