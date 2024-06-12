import Producto from "./components/Producto";
import "./app.css";

export default function App() {
  return(
    <section className="prod-section">
      <Producto nombre="Papa" />
      <Producto nombre="Cebolla" />
    </section>
  )
}