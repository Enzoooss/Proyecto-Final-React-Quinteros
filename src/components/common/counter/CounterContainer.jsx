import { useState } from "react"
import Counter from "./Counter"


const CounterContainer = ({stock, initial=1, onAdd}) => {
    const [contador, setContador] = useState(initial);
  
  const sumar = () => {
    if (contador < stock){
      setContador(contador + 1);
    }else {
      alert("maximo en stock")
    }
  };

  const restar = () => {
    if (contador > 1){
      setContador(contador - 1);
    }else {
      alert("No podes menos de 1")
    }
  };


  let objetProps = {
    restar,
    sumar,
    contador,
    onAdd
  };

  return (
    <Counter {...objetProps}/>
)
}

export default CounterContainer