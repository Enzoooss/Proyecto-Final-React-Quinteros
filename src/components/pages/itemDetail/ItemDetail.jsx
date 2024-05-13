import CounterContainer from "../../common/counter/CounterContainer"
import "./ItemDetail.css"

const ItemDetail = ({item, onAdd, initial}) => {
  return (
    <div>
      <div className="carta-Detail">
        <div className="image-container-detail">
          <img src={item.img} alt="" />
        </div>
        <div className="container-detail">
          <h2> 
            <span>Nombre: {item.title}</span>
          </h2>
          <h2> 
            <span>Descripcion: {item.description}</span>
          </h2>
          <h2> 
            <span>Genero: {item.category}</span>
          </h2>
          <h2> 
            <span>Precio: $ {item.price}  -.</span>
          </h2>
          <h2> 
            <span>Stock: {item.stock}</span>
          </h2>
          <div className="contador">
            {item.stock ? (
            <span><CounterContainer stock={item.stock} onAdd={onAdd} initial={initial}/></span>) : (
              <h1>No hay stock</h1> 
            )}
            
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ItemDetail