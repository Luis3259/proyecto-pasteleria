import "../App.css"

function Fotos(props) {
    return (
        <div>
            <div className="container espaciado">
                <h1 className="title">Pasteleria la Tarta Miauh</h1>
            </div>
            <div className="bg-dark">
                <div className="">
                    <div className="row">
                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" >
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="2000">
                                    <img src="/Imagenes/Inicio/imgpru6.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src="/Imagenes/Inicio/imgpru2.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src="/Imagenes/Inicio/imgpru4.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src="/Imagenes/Inicio/imgpru5.jpg" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Fotos;
