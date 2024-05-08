import { createContext, useState } from "react";

export const CartContext = createContext(); // --> contexto

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    //verificar si esta en el carrito
    let exist = isInCart(product.id);
    if (exist) {
      let newArray = cart.map((elemento) => {
        //SIEMPRE EL MAP RETORNA ALGO
        if (elemento.id === product.id) {
          //modificado
          return { ...elemento, quantity: product.quantity };
        } else {
          return elemento;
        }
      });

      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteById = (id) => {
    const newArray = cart.filter((product) => product.id !== id);
    setCart(newArray);
  };

  const isInCart = (id) => {
    let bool = cart.some((product) => product.id === id); // siempre devuelve un booleano
    return bool;
  };


  const getQuantityById = ( id ) =>{
    let product = cart.find( el => el.id === id)
    return product?.quantity
  }

  const getPrecioTotal = () => {
    //en este caso el elemento va de segundo lugar
    let total = cart.reduce( (acc, elemento) => {
      return acc + (elemento.quantity * elemento.price)
    }, 0)

    return total 
  }


  const getTotalProducts = () => {
    let total = cart.reduce( (acc, elemento) => {
      return acc + elemento.quantity
    }, 0)
    return total
  }


  let data = { cart, addToCart, clearCart, deleteById, getQuantityById, getPrecioTotal, getTotalProducts };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
