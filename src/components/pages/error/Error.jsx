import { NavLink } from "react-router-dom"
import "../error/Error.css"


const Error = () => {
  return (
    <div className="error">
      <div className="carta-error">
        <div className="error-404">
          <h1>ERROR 404 PAGE NOT FOUND</h1>
        </div>
        <div className="comentario-error">
          <p>La Página que intentas solicitar no está en el servidor</p>
          <p>Para volver al inicio Presione aqui:</p>
          <div className="container-titulo-error">
          <NavLink to={"/"}><h1 className="titulo-error">👾 GameStore</h1></NavLink> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error