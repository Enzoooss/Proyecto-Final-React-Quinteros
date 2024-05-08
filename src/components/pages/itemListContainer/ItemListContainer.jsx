import { useEffect, useState } from "react";
import { products } from "../../../productsMock"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import {addDoc, collection, getDoc, getDocs, query, where} from "firebase/firestore"




const ItemListContainer = () => {

  const {name} = useParams()
 
  const [items, setItems] = useState([]);
    const [error, setError] = useState( null );

    useEffect( ()=>{

        // const productsCollection = collection( db , "products")]-[]
        // getDocs(productsCollection).then((res) => {let newArray = res.docs.map( (doc)=>{
        //   return {id: doc.id, ...doc.data()};
        // })
        //   setItems(newArray)});

        // const productsCollection = collection( db , "products")
        // let consulta = query( productsCollection, where( "plataforma", "==", name) )
        // getDocs(consulta).then((res)=>{ let newArray = res.docs.map( (doc)=>{
        //     return {id: doc.id, ...doc.data()};
        //   })
        //     setItems(newArray)});

        const productsCollection = collection(db, "products")
        let consulta = productsCollection;
        if(name) {
          consulta = query(productsCollection, where("plataforma", "==", name));
        }
        getDocs(consulta).then((res)=>{
          let newArray = res.docs.map((doc) => {
            return {id: doc.id, ...doc.data() };
          });
          setItems(newArray);
        });
        }, [name]);

        // const addDocsProducts = () =>{

        //   let productsCollection = collection(db, "alguna")
        //   products.forEach( (product)=> addDoc(productsCollection , product))
        // }

  return (
    <main>
      {
        items.length > 0 ? ( <ItemList items={items} error={error}/>) : ( <h1>Cargando.... ANASHEEE </h1>) 
      }
      {/* <button onClick={addDocsProducts}>Agregar Documentos</button> */}
      {/* <h1> Cargando....</h1> */}
      {/* <ItemList items={items}/> */}
    </main>
  )
}

export default ItemListContainer