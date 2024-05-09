import { useContext, useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { doc, collection, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const ItemDetailContainer = () => {
  const { id } = useParams();
  // console.log(id)

  const [item, setItem] = useState({});

  const { addToCart, getQuantityById } = useContext(CartContext);

  let initial = getQuantityById(+id)
  

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    getDoc(refDoc).then( res =>{
      setItem({id: res.id, ...res.data()});
    });
  }, [id]);
  // useEffect(() => {
  //   let itemEncontrado = products.find((product) => product.id === +id);
  //   const getProduct = new Promise((resolve, reject) => {
  //     resolve(itemEncontrado);
  //   });

  //   getProduct.then((res) => setItem(res));
  // }, [id]);


  const onAdd = (cantidad) => {
    let product = { ...item, quantity: cantidad};
    //Agregamos
    addToCart(product);
  };

  return <ItemDetail item={item} onAdd={onAdd} initial={initial} />;
};

export default ItemDetailContainer;
