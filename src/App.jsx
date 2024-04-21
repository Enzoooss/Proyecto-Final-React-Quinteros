import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import { Layout } from "./components/layout/Layout";
import Error from "./components/pages/error/Error";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={ <ItemListContainer/> }/>
            <Route path="/plataforma/:name" element={ <ItemListContainer/> }/>
            <Route path="/itemDetail/:id" element={ <ItemDetailContainer/> }/>
            <Route path="/cart" element={ <CartContainer/> }/>
          </Route>
            <Route path="*" element={ <Error/> }/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
