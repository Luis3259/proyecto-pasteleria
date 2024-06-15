import Prod from "../components/Protuctos";
function Mini(props) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <h1 className="title">Mini Pasteleria</h1>
                <Prod imagen="/Imagenes/Mini/mini 1.jpg"
                    descripcion="Alfajor baby boy"
                    precio="0.85" />
                <Prod imagen="/Imagenes/Mini/mini 2.jpg"
                    descripcion="Alfajor baby girl"
                    precio="0.85" />
                <Prod imagen="/Imagenes/Mini/mini 3.jpg"
                    descripcion="Alfajor normal :)"
                    precio="0.85" />
                <Prod imagen="/Imagenes/Productos/no 1.jpg"
                    descripcion="Mini cheesecake"
                    precio="0.85" />
                <Prod imagen="/Imagenes/Productos/no 2.jpg"
                    descripcion="Bolitas de chocolate"
                    precio="0.85" />
                <Prod imagen="/Imagenes/Mini/mini 4.jpg"
                    descripcion="Mini queso de chocolate"
                    precio="0.85" />
                <Prod imagen="/Imagenes/Mini/mini 5.jpg"
                    descripcion="Florentinas de chocolate con leche"
                    precio="0.85" />
                <Prod imagen="/Imagenes/Mini/mini 6.jpg"
                    descripcion="Crunchy Snickers"
                    precio="0.85" />
                <Prod imagen="/Imagenes/Mini/mini 7.jpg"
                    descripcion="Tartaleta de Frambuesas"
                    precio="0.85" />

            </div>
        </div>
    );
}
export default Mini;
