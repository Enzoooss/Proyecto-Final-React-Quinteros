import { useEffect, useState } from "react";
import { products } from "../../../productsMock"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";



const ItemListContainer = () => {

  const {name} = useParams()
  console.log(name)
 
  const [items, setItems] = useState([]);
    const [error, setError] = useState( null );

    useEffect( ()=>{

        let productFiltered = products.filter( product => product.plataforma === name)

        const getProducts = new Promise( (resolve, reject) => {
            let x = true
            if(x){
                setTimeout(() => {
                    resolve(name ? productFiltered : products);
                    
                }, 10);
            }else {
                reject({status: 400, message: "No puedes Ingresar"})
            } 
         });
        
         getProducts.then( (res)=>setItems( res ) ).catch( (error)=>{setError(error)} )
        
    }, [name]);

  return (
    <main>
      <ItemList items={items}/>
    </main>
  )
}

export default ItemListContainer