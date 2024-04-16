import { useEffect, useState } from "react";
import { products } from "../../../productsMock"
import ItemList from "./ItemList";


const ItemListContainer = () => {
 
  const [items, setItems] = useState([]);
    const [error, setError] = useState( null );

    useEffect( ()=>{
        const getProducts = new Promise( (resolve, reject) => {
            let x = true
            if(x){
                setTimeout(() => {
                    resolve(products)
                    
                }, 2000);
            }else {
                reject({status: 400, message: "No puedes Ingresar"})
            } 
         });
        
         getProducts.then( (res)=>setItems( res ) ).catch( (error)=>{setError(error)} )
        
    }, []);

  return (
    <main>
      <ItemList items={items}/>
    </main>
  )
}

export default ItemListContainer