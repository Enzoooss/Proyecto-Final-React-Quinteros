import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Skeleton } from "@mui/material";
import { BounceLoader } from "react-spinners";

const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const productsCollection = collection( db , "products")]-[]
    // getDocs(productsCollection).then((res) => {let newArray = res.docs.map( (doc)=>{
    //   return {id: doc.id, ...doc.data()};
    // })
    //   setItems(newArray)});


    const productsCollection = collection(db, "products");
    let consulta = productsCollection;
    if (name) {
      consulta = query(productsCollection, where("plataforma", "==", name));
    }
    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setItems(newArray);
    });
  }, [name]);


  if (items.length === 0) {
    return (
      <div style={{display:"flex"}}>
        <div style={{ padding: "40px 22px" }}>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "2rem" }}
            width={400}
            height={240}
          />
          <div
            style={{
              width: "400px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem" }}
              width={280}
              height={50}
            />
          </div>
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            width={400}
            height={80}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            width={80}
            height={50}
          />
        </div>
        <div style={{ padding: "40px 22px" }}>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "2rem" }}
            width={400}
            height={240}
          />
          <div
            style={{
              width: "400px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem" }}
              width={280}
              height={50}
            />
          </div>
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            width={400}
            height={80}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            width={80}
            height={50}
          />
        </div>
        <div style={{ padding: "40px 22px" }}>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "2rem" }}
            width={400}
            height={240}
          />
          <div
            style={{
              width: "400px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem" }}
              width={280}
              height={50}
            />
          </div>
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            width={400}
            height={80}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            width={80}
            height={50}
          />
        </div>
        <div style={{ padding: "40px 22px" }}>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "2rem" }}
            width={400}
            height={240}
          />
          <div
            style={{
              width: "400px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem" }}
              width={280}
              height={50}
            />
          </div>
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            width={400}
            height={80}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            width={80}
            height={50}
          />
        </div>
      </div>
    );
  }

  return (
    <main>
      {items.length > 0 ? (
        <ItemList items={items} error={error} />
      ) : (
        <BounceLoader></BounceLoader>
      )}
      {/* <button onClick={addDocsProducts}>Agregar Documentos</button> */}
      {/* <h1> Cargando....</h1> */}
      {/* <ItemList items={items}/> */}
    </main>
  );
};

export default ItemListContainer;
