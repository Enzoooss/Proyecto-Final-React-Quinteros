import { useContext, useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
  const { id } = useParams();
  // console.log(id)

  const [item, setItem] = useState({});

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    let itemEncontrado = products.find((product) => product.id === +id);
    const getProduct = new Promise((resolve, reject) => {
      resolve(itemEncontrado);
    });

    getProduct.then((res) => setItem(res));
  }, [id]);

  // console.log(item)

  const onAdd = (cantidad) => {
    // console.log(item)
    let product = { ...item, quantity: cantidad };
    //Agregamos
    addToCart(product);
  };

  return <ItemDetail item={item} onAdd={onAdd} />;
};

export default ItemDetailContainer;
