


const Counter = ({restar, sumar, contador, onAdd}) => {
  return (
    <div>
      <button onClick={restar}>Restar</button>
      <h2>{contador}</h2>
      <button onClick={sumar}>Sumar</button>
      <button onClick={()=>onAdd(contador)}>Agregar al carrito</button>
    </div>
  )
}

export default Counter;