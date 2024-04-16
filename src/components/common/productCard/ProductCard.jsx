import { Card, CardMedia,CardActionArea, CardContent, Typography, CardActions, Button } from "@mui/material"
import "../productCard/ProductCard.css"


const ProductCard = ({title, description, price, img,category,stock, id}) => {
  return (
    <div>
        <Card sx={{ maxWidth: 345 }} className="carta">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
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
            {category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stock Disponible: {stock}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="contenedor-compra">
        <Button size="small" color="primary">
          Comprar
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default ProductCard