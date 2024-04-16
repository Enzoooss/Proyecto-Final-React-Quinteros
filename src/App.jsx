import { Layout } from "./components/layout/Layout"
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Layout>
        <ItemListContainer/>
      </Layout>
    </>
  );
}

export default App;
