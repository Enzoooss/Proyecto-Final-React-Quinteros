import { CarWidget } from "../../common/cartWidget/CartWidget";
import "../navbar/Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav-pag">
      <div className="container">
        <Link to={"/"} className="titulo"><h1>👾 GameStore</h1></Link>
        <ul className="lista">
           <Link to={"/"}> Todos</Link>
           <Link to={"/plataforma/Playstation"}>Playstation</Link>
           <Link to={"/plataforma/Xbox"}>Xbox</Link>
           <Link to={"/plataforma/Nintendo"}>Nintendo</Link>
           {/* //Estas son las categorias Clickeables ya que voy a poner diferentes juegos de cada consola diferente */}
        </ul>
      </div>
      <CarWidget />
    </nav>
  );
}
