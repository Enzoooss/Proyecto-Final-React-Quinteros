import { createContext, useState } from "react";

export const CartContext = createContext(); // --> contexto

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);  

  const addToCart = ( product )=>{
    setCart([...cart, product])
  }

  const clearCart = () => {
    setCart([])
  }

  const deleteById = ( id ) => {
    const newArray = cart.filter( product => product.id !== id )
    setCart(newArray)
  }


  let data = { cart, addToCart, clearCart, deleteById};

  return <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>;
};

export default CartContextProvider;
