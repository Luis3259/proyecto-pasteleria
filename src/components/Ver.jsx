import { useLocation } from "react-router-dom";

function Ver() {
    const location = useLocation();
    const { imagen, descripcion, precio } = location.state || {}; // Destructurar con un valor por defecto

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={imagen} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-6">
                    <h1 className="title">{descripcion}</h1>
                    <p className="subTitle"><code>{precio}$</code></p>
                    <button type="button" className="btn btn-primary">Comprar</button>

                </div>
            </div>
        </div>
    );
}

export default Ver;
