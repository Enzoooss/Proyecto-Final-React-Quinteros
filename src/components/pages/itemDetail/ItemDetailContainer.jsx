import { useContext, useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { doc, collection, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart, getQuantityById } = useContext(CartContext);
  const [item, setItem] = useState({});
  const [contador, setContador] = useState(1);

  // Obtener la cantidad inicial del producto en el carrito
  let initial = getQuantityById(+id);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    getDoc(refDoc).then((res) => {
      setItem({ id: res.id, ...res.data() });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    const isProductInCart = getQuantityById(+id);
    const newQuantity = isProductInCart !== undefined ? isProductInCart + cantidad : cantidad;
    let product = { ...item, quantity: newQuantity };

    if (item.stock > 0) {
      addToCart(product);
      setContador(newQuantity);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Se agregó al Carrito",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "No hay Stock",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const sumar = () => {
    if (contador < item.stock) {
      setContador(contador + 1);
    } else {
      alert("Máximo en stock");
    }
  };

  return (
    <ItemDetail
      item={item}
      onAdd={onAdd}
      initial={initial}
      contador={contador}
      restar={restar}
      sumar={sumar}
    />
  );
};

export default ItemDetailContainer;
