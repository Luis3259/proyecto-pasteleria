import "../App.css";
import Fotos from "../components/Fotos";
import Prod from "../components/Protuctos";
import Promos from "../components/Promos";

function Inicio(props) {
    return (
        <div className="container-fluid">
            <Fotos />
            <h1 className="title">Dulces para mamá</h1>
            <div className="row justify-content-center">
                <Prod imagen="/Imagenes/Productos/regalo para papa 1.jpg"
                    descripcion="Caja de 24 unidades de cakepop mas una botella de wiski"
                    precio="250" />
                <Prod imagen="/Imagenes/Productos/regalo 2.jpg"
                    descripcion="Galletas variadas para este dia del padre"
                    precio="125" />
                <Prod imagen="/Imagenes/Productos/regalo 3.jpg"
                    descripcion="Oreos bañados en chocolate para el dia del padre"
                    precio="85" />
                <Prod imagen="/Imagenes/Productos/regalo 4.jpg"
                    descripcion="Bombon de whisky para el dia del padre"
                    precio="0.85" />
                <Prod imagen="/Imagenes/Productos/regalo 5.jpg"
                    descripcion="Tarta de caramelo para el dia del padre"
                    precio="350" />
                <Prod imagen="/Imagenes/Productos/regalo 6.jpg"
                    descripcion="Tiramisú a mi manera para este dia del padre"
                    precio="100" />

            </div>
            <h1 className="title">No te lo pierdas</h1>
            <div className="row justify-content-center">
                <Promos imagen="/Imagenes/Productos/no 1.jpg"
                    titulo="Cheesecake de Guayaba" />
                <Promos imagen="/Imagenes/Productos/no 2.jpg"
                    titulo="Trufa de Chocolate con leche" />
                <Promos imagen="/Imagenes/Productos/no 3.jpg"
                    titulo="Cake de Naranja mini" />
            </div>
        </div>
    );
}
export default Inicio;