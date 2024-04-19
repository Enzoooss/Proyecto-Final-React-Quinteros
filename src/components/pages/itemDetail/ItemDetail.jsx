import "./ItemDetail.css"

const ItemDetail = ({item}) => {
  return (
    <div>
      <section className="carta-detail">
        <div className="image-container-detail">
        
        </div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>{item.price}</p>
      </section>
        
    </div>
  )
}

export default ItemDetail