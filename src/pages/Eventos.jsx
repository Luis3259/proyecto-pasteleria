import Prod from "../components/Protuctos";
import "../App.css"
function Evento(props) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <h1 className="title">Paquetes para eventos</h1>
                <Prod imagen="/Imagenes/Productos/regalo 6.jpg"
                    descripcion="Tiramisú a mi manera para este dia del padre"
                    precio="100" />
                <Prod imagen="/Imagenes/Productos/regalo 3.jpg"
                    descripcion="Oreos bañados en chocolate para el dia del padre"
                    precio="85" />
                    <Prod imagen="/Imagenes/Productos/no 2.jpg"
                    descripcion="Trufa de chocolate con leche"
                    precio="0.85" />
                <Prod imagen="/Imagenes/Productos/regalo 5.jpg"
                    descripcion="Tarta de caramelo para el dia del padre"
                    precio="350" />
                <Prod imagen="/Imagenes/Productos/regalo para papa 1.jpg"
                    descripcion="Caja de 24 unidades de cakepop más una botella de whisky"
                    precio="250" />
                <Prod imagen="/Imagenes/Productos/regalo 2.jpg"
                    descripcion="Galletas variadas para este dia del padre"
                    precio="125" />
                    <Prod imagen="/Imagenes/Productos/regalo 2.jpg"
                    descripcion="Galletas variadas para este dia del padre"
                    precio="125" />
                <Prod imagen="/Imagenes/Productos/regalo 4.jpg"
                    descripcion="Bombón de whisky para el dia del padre"
                    precio="0.85" />
                <Prod imagen="/Imagenes/Productos/no 1.jpg"
                    descripcion="Cheesecake de Guayaba"
                    precio="0.85" />
                <Prod imagen="/Imagenes/Productos/no 3.jpg"
                    descripcion="Cake de Naranja mini"
                    precio="0.85" />
                


            </div>
        </div>
    );
}

export default Evento;