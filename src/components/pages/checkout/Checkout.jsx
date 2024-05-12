import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import "../checkout/Checkout.css"

export const Checkout = () => {
  const { cart, getPrecioTotal, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // const [nombre, setNombre] = useState("")
  // const [telefono, setTelefono] = useState("")
  // const [email, setEmail] = useState("")

  const handleChange = (event) => {
    let { name, value } = event.target;

    setInfo({ ...info, [name]: value });
  };

  let total = getPrecioTotal();

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event) lo que yo quiera hacer con el formulario
    // console.log(info);
    let obj = {
      buyer: info,
      items: cart,
      total,
    };
    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, obj).then((res) => setOrderId(res.id));

    // let productsCollection = collection(db, "products")
    // let refDoc = doc(db, "products", "asdasd")
    // updateDoc(doc(db, "products", "asdasd") )

    cart.forEach((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
    });

    clearCart();
  };

  return (
    <div style={{ padding: "100px" }}>
      {orderId ? (
        <div className="pedido-finalizado">
          <h1 className="title-finalizado">El numero de tu pedido es: {orderId}</h1>
          <h2 className="subtitle-finalizado">Muchas gracias por tu compra!!</h2>
          <img src="https://i.pinimg.com/236x/31/de/ed/31deede4f9648e9f6f3982a2b22cf554.jpg" alt="" />
        </div>
      ) : (
        <div className="formulario">
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              type="text"
              label="nombre"
              onChange={handleChange}
              name="name"
            />
            <TextField
              variant="outlined"
              type="text"
              label="telefono"
              onChange={handleChange}
              name="phone"
            />
            <TextField
              variant="outlined"
              type="text"
              label="email"
              onChange={handleChange}
              name="email"
            />
            <Button variant="contained" type="submit">
              Enviar
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};
