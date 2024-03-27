import { FaShoppingCart } from "react-icons/fa";

export function CarWidget() {
  return (
    <div className="carrito">
        <FaShoppingCart size={"2rem"}/>
        <span>0</span>
    </div>
  )
}