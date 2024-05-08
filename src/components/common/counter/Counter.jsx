import { Button } from "@mui/material";



const Counter = ({ restar, sumar, contador, onAdd }) => {
  return (
    <div>
      <Button onClick={restar} variant="outlined" >Restar</Button>
      <h2>{contador}</h2>
      <Button onClick={sumar} variant="outlined">Sumar</Button>
      <button onClick={() => onAdd(contador)}>Agregar al carrito</button>
    </div>
  );
};

export default Counter;
