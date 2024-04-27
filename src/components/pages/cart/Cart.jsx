import { Link } from "react-router-dom";
import "../cart/Cart.css";
import { Button } from "@mui/material";


const Cart = ({cart, clearCart, deleteById}) => {
  return (
    <main>
      <div>
        <h1>Aca van los Productos</h1>
        {cart.map((product) => (
          <div key={product.id} style={{border: "2px solid black"}}>
            <h3>{product.title}</h3>
            <h3>{product.price}</h3>
            <h3>{product.quantity}</h3>
            <button onClick={()=>deleteById(product.id)}>Eliminar</button>
          </div>
        ))}

        <Button onClick={clearCart} variant="outlined" >Eliminar carrito</Button>

        <Link to="/checkout">
          <Button variant="contained">Finalizar compra</Button>
        </Link>
      </div>
    </main>
  );
};

export default Cart;
