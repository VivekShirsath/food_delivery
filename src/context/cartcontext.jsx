import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartItems , setCartItems] = useState([]);

    const {totalPrice, totalQuantity} = cartItems.reduce((acc, item) => ({
      totalPrice: acc.totalPrice + item.price * item.quantity, 
      totalQuantity: acc.totalQuantity + item.quantity
  }),
  { totalPrice: 0, totalQuantity: 0 })

    const removeCart = ({id,name,price}) => {
        const isQuantity = cartItems.find(item => item.id === id)?.quantity;

        if(isQuantity > 1){
            setCartItems(
                cartItems.map((item) =>
                  item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
              );
        }
        else{
            setCartItems(cartItems.filter(item => item.id !== id));
        }
    }
 

    // {id,name,price},title

    const addToCart = ({id,name,price,imageId},title) => {
        const isItemPresent = cartItems.findIndex(item => item.id === id);
       console.log(title);
        if (isItemPresent === -1) {
            setCartItems([...cartItems, { id, name, price, quantity: 1 ,title,imageId}]);
          } else {
            setCartItems(
              cartItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 ,title,imageId}
                 : item
              )
            );
          }  
    }


    
    return <CartContext.Provider value={{ cartItems,addToCart , setCartItems,removeCart,totalPrice}}>
        {children}
    </CartContext.Provider>
}


