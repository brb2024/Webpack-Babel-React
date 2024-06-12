import {useState} from "react";
import "./css/producto.css";

export default function Producto({nombre}) {
  const [estado, setEstado] = useState(false);

  const handleClick = () => {
    setEstado(!estado);
  }

  let texto = estado ? "Quitar" : "Agregar";
  let estilo = estado ? "btn btn-r" : "btn btn-g";

  return(
    <div className="producto-container">
      <span>{nombre}</span>
      <button className={estilo} onClick={handleClick}>{texto}</button>
    </div>
  );
}