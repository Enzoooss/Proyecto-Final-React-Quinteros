import { useContext } from "react"
import Cart from "./Cart"
import { CartContext } from "../../../context/CartContext"

const CartContainer = () => {

  const {cart, clearCart, deleteById, getPrecioTotal} = useContext(CartContext);
  let total = getPrecioTotal()
    
  return <Cart cart={cart} clearCart={clearCart} deleteById={deleteById} total={total}/>
}

export default CartContainer