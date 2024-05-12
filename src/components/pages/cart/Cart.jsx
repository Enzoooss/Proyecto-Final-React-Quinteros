import { Link } from "react-router-dom";
import "../cart/Cart.css";
import { Button } from "@mui/material";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Cart = ({ cart, clearCart, deleteById, total }) => {
  const clearCartAlert = () => {
    Swal.fire({
      title: "Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si limpiar",
      denyButtonText: `No, dejar como estaba`,
    }).then((res) => {
      if (res.isConfirmed) {
        clearCart()
        Swal.fire({
          title: "El carrito fue limpiado con Exito",
          icon: "success",
        });
      } else if (res.isDenied) {
        Swal.fire({
          title: "El carrito quedo como estaba",
          icon: "info",
        });
      }
    });
  };


  return (
    <main>
      <div>
        <h1 className="title-cart">Videojuegos agregados a tu carrito</h1>
        {cart.map((product) => (
          <div key={product.id} className="products-comprados">
            <img src={product.img} alt="" />
            <h3>{product.title}</h3>
            <h3>$ {product.price} -.</h3>
            <h3>Cantidad: {product.quantity}</h3>
            <FaRegTrashAlt
              onClick={() => deleteById(product.id)}
              className="delete"
            />
          </div>
        ))}
        <div className="finalizado-compra">
          <h2>El total a pagar es $ {total} -.</h2>
          <div className="botones-cart">
            <Button onClick={clearCartAlert} variant="outlined">
              Eliminar carrito
            </Button>
            {cart.length > 0 && (
              <Link to="/checkout">
                <Button variant="contained">Finalizar compra</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
