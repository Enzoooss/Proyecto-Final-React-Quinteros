import ProductCard from "../../common/productCard/ProductCard"


const ItemList = ({items}) => {

    console.log(items)

  return (
    <>
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
    </>
  )
}

export default ItemList