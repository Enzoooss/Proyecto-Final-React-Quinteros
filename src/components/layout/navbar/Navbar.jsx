import { CarWidget } from "../../cartWidget/CartWidget";
import "../navbar/Navbar.css"

export default function Navbar() {
  return (
    <nav className="nav-pag">
      <div className="container">
        <h1 className="titulo"><a href="#">👾 GameStore</a></h1>
        <ul className="lista">
           <li><a href="#">Playstation</a></li>
           <li><a href="#">Xbox</a></li>
           <li><a href="#">Nintendo</a></li>
           {/* //Estas son las categorias Clickeables ya que voy a poner diferentes juegos de cada consola diferente */}
        </ul>
      </div>
      <CarWidget />
    </nav>
  );
}
