import { Button } from "@mui/material";
import "../counter/Counter.css"



const Counter = ({ restar, sumar, contador, onAdd }) => {
  return (
    <div className="contador-carro">
      <Button onClick={restar} variant="outlined" >Restar</Button>
      <h2>{contador}</h2>
      <Button onClick={sumar} variant="outlined">Sumar</Button>
      <Button onClick={() => onAdd(contador)}>Agregar al carrito</Button>
    </div>
  );
};

export default Counter;
