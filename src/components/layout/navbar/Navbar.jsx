import { CarWidget } from "../../cartWidget/CartWidget";

export default function Navbar() {
  const categorias = ["Playstation", "Xbox", "Nintendo"];
  return (
    <nav className="nav-pag">
      <div className="container">
        <h1 className="titulo">👾 GameStore</h1>
        <ul className="lista">
          {categorias.map((categoria) => (
            <li key={categoria}>
              <a href={categoria}>{categoria}</a>
            </li> //Estas son las categorias Clickeables ya que voy a poner diferentes juegos de cada consola diferente
          ))}
        </ul>
      </div>
      <CarWidget />
    </nav>
  );
}
