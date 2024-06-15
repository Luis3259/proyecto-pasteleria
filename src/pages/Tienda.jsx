import { Link } from "react-router-dom";
import Promos from "../components/Promos";

function Tienda() {
    return (
        <div className="row justify-content-center">
            <h1 className="title">Tienda</h1>
            <Promos imagen="/Imagenes/otros 4.jpg"
                titulo="Mini pasteleria"
                url="/mini-pasteleria" />
            <Promos imagen="/Imagenes/otros.jpg"
                titulo="Todos nuestros productos"
                url="/evento" />
            <Promos imagen="/Imagenes/otros 2.jpg"
                titulo="Regalos"
                url="/regalos" />
            <Promos imagen="/Imagenes/otros 3.jpg"
                titulo="Algunas recetas para hacer en casa" 
                url="/recetas"/>

        </div>
    );
}
export default Tienda;