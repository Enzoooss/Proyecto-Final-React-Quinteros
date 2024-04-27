import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import { Layout } from "./components/layout/Layout";
import Error from "./components/pages/error/Error";
import { Checkout } from "./components/pages/checkout/Checkout";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={ <ItemListContainer/> }/>
              <Route path="/plataforma/:name" element={ <ItemListContainer/> }/>
              <Route path="/itemDetail/:id" element={ <ItemDetailContainer/> }/>
              <Route path="/cart" element={ <CartContainer/> }/>
              <Route path="/checkout" element={<Checkout/>} />
            </Route>
              <Route path="*" element={ <Error/> }/>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
  );
}

export default App;
 