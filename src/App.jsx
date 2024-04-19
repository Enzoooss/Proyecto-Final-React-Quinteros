import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
      <BrowserRouter>
        <Routes>

          <Route element={<Layout/>}>
            <Route path="/" element={ <ItemListContainer/> }/>
            <Route path="/plataforma/:name" element={ <ItemListContainer/> }/>
            
            <Route path="/itemDetail/:id" element={ <ItemDetailContainer/> }/>
            <Route path="/cart" element={ <CartContainer/> }/>
            <Route path="*" element={ <h1>ERROR 404 PAGE NOT FOUND</h1> }/>
          </Route>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
