import ProductCard from "../../common/productCard/ProductCard"
import "./ItemListContainer.css"

const ItemList = ({items}) => {

    console.log(items)

  return (
    <div className="pagina">
        {items.map( (item, index)=>{
            return <ProductCard 
            key={item.id} 
            title={item.title}
            description={item.description}
            price={item.price}
            img={item.img}
            category={item.category}
            stock={item.stock}
            id={item.id} 
            />
        }
        )

        }
    </div>
  )
}

export default ItemList