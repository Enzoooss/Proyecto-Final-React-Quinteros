import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import "../productCard/ProductCard.css";
import ItemDetail from "../../pages/itemDetail/ItemDetail";
import { Link } from "react-router-dom";
import ItemDetailContainer from "../../pages/itemDetail/ItemDetailContainer";
import { CartContext } from "../../../context/CartContext";
import { useContext, useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { doc, collection, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";





const ProductCard = ({ title, description, price, img, id }) => {
  
  const { addToCart, getQuantityById } = useContext(CartContext);
  const [contador,setContador] = useState(1)
  const [item, setItem] = useState({});

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    getDoc(refDoc).then( res =>{
      setItem({id: res.id, ...res.data()});
    });
  }, [id]);
  
  const onAdd = (cantidad) => {
    let product = { ...item, quantity: cantidad};
    addToCart(product);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Se agrego al Carrito",
      showConfirmButton: false,
      timer: 1500
    });
  };
  
  return (
    <div className="carta">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="container-text">
        <h2 className="title">{title}</h2>
        <p className="descripcion">{description}</p>
        <p className="price">$ {price} </p>
          <Link to={`/itemDetail/${id}`}>
          <p className="details">Detalles</p>
        </Link> 
      </div>
      <div className="contenedor-compra">
        <button onClick={() => onAdd(contador)} className="comprar-boton" >Agregar al Carrito</button>
        
      </div>
    </div>
  );
};

export default ProductCard;
