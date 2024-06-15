import { useNavigate } from "react-router-dom";

function Prod(props) {
    const navigate = useNavigate();

    const handleVerClick = () => {
        navigate(`/ver`, { state: { imagen: props.imagen, titulo: props.titulo, descripcion: props.descripcion, precio: props.precio } });
    };

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 m-2 espaciado">
            <div className="card" style={{ width: '100%' }}>
                <img src={props.imagen} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">{props.descripcion}</p>
                    <p><code>{props.precio}$</code></p>
                    <button onClick={handleVerClick} className="btn btn-primary">ver</button>
                </div>
            </div>
        </div>
    );
}

export default Prod;
