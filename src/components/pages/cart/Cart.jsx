import { Link } from "react-router-dom";
import "../cart/Cart.css";
import { Button } from "@mui/material";


const Cart = ({cart, clearCart, deleteById, total}) => {
  return (
    <main>
      <div>
        <h1>Videojuegos agregados a tu carrito</h1>
        {cart.map((product) => (
          <div key={product.id} className="products-comprados">
            <img src={product.img} alt="" />
            <h3>{product.title}</h3>
            <h3>{product.price}</h3>
            <h3>{product.quantity}</h3>
            <button onClick={()=>deleteById(product.id)}>Eliminar</button>
          </div>
        ))}
          <h2>El total a pagar es {total}</h2>
        <Button onClick={clearCart} variant="outlined" >Eliminar carrito</Button>

        {
          cart.length > 0 && (<Link to="/checkout">
          <Button variant="contained">Finalizar compra</Button>
        </Link>)
        }
        
      </div>
    </main>
  );
};

export default Cart;
