import { useContext } from "react"
import Cart from "./Cart"
import { CartContext } from "../../../context/CartContext"

const CartContainer = () => {

  const {cart, clearCart, deleteById} = useContext(CartContext)
    
  return <Cart cart={cart} clearCart={clearCart} deleteById={deleteById}/>
}

export default CartContainer