import { Link } from "react-router-dom";
function Promos(props) {
    return (
        <Link className="col-lg-3 col-md-4 col-sm-6 m-2 espaciado" to={props.url}>
            <div className="card text-bg-dark">
                <img src={props.imagen} className="card-img" alt="..."/>
                    <div className="card-img-overlay">
                        <h5 className="card-title subTitle" >{props.titulo}</h5>
                        <p className="card-text"></p>
                    </div>
            </div>
        </Link>
    );
}
export default Promos;