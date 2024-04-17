import { Card, CardMedia,CardActionArea, CardContent, Typography, CardActions, Button } from "@mui/material"
import "../productCard/ProductCard.css"


const ProductCard = ({title, description, price, img, id}) => {
  
  return (
    <div className="carta">
      
        <div className="img-container">
        <img src={img} alt="" /></div>
      <div className="container-text">
        <h2 className="title">{title}</h2>
        <p className="descripcion">{description}</p>
        <p className="price">$ {price} -</p>
        <button className="details"> Detalles</button>
      </div>
        <div className="contenedor-compra">
          <p className="comprar-boton">Buy Now</p>
        </div>
        {/* <Card sx={{ width: 350 }} className="carta">
      <CardActionArea>
        <CardMedia
          component="img"

          image={img}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {price} .-
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stock Disponible: {stock}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="contenedor-compra">
        <Button size="small" color="primary" className="button-carrito">
          Añadir al Carrito
        </Button>
      </CardActions>
    </Card> */}
    </div>
  )
}

export default ProductCard