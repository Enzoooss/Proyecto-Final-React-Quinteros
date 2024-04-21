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

const ProductCard = ({ title, description, price, img, id }) => {
  return (
    <div className="carta">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="container-text">
        <h2 className="title">{title}</h2>
        <p className="descripcion">{description}</p>
        <p className="price">$ {price} -</p>
          <Link to={`/itemDetail/${id}`}>
          <p className="details">Detalles</p>
        </Link> 
      </div>
      <div className="contenedor-compra">
        <p className="comprar-boton">Buy Now</p>
      </div>
    </div>
  );
};

export default ProductCard;
