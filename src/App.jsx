import Navbar from "./components/layout/navbar/Navbar"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"

function App() {
  
  return (
    <>
      <Navbar/>
      <ItemListContainer
        gretting={"Bienvenidos a GameStore. Venta de Videojugos de Consola"}/>
    </>
  )
}

export default App
