import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";


function Nav(){
    return(
        <div className=" bg-white">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-5">{/*Navegacion principal*/}
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                    <Link className="nav-link" to="/">Inicio</Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                         <div className="dropdown">
                                            <Link className="nav-link" type="button" data-bs-toggle="dropdown">
                                                Tienda
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li><Link className="dropdown-item" type="button" to="/mini-pasteleria">Mini pasteleria</Link></li>
                                                <li><Link className="dropdown-item" type="button" to="/evento">Todos nuestros productos</Link></li>
                                                <li><Link className="dropdown-item" type="button" to="/regalos">Regalos</Link></li>
                                                <li><Link className="dropdown-item" type="button" to="/recetas">Algunas recetas</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <Link className="nav-link" type="button" data-bs-toggle="dropdown">
                                                Nuestros productos
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li><Link className="dropdown-item" type="button" to="/evento">Todos nuestros productos</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" to="/regalos">Regalos</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" to="/tienda">Categorias</Link>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="col-2 justify-content-center">{/*Logo*/}
                        <Link to="/"><img 
                            src="/Imagenes/icon.png" 
                            alt="Logo"
                            className="mx-auto d-block" 
                            style={{ maxWidth: '45px', height: 'auto' }} 
                        /></Link>
                    </div>
                    <div className="col-5 d-flex justify-content-end">{/*Navegacion Segundaria o de redes*/}
                        <nav className="navbar-expand">
                            <div className="container-fluid ">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">                                
                                    <li className="nav-item m-2">
                                    <Link className="nav-link" to="https://www.facebook.com/"><FaFacebook></FaFacebook></Link>
                                    </li>
                                    <li className="nav-item m-2">
                                    <Link className="nav-link" to="https://www.tiktok.com/"><FaTiktok /></Link>
                                    </li>
                                    <li className="nav-item m-2">
                                    <Link className="nav-link" to="https://www.instagram.com/"><FaInstagram /></Link>
                                    </li>
                                    <li className="nav-item m-2">
                                    <Link className="nav-link" to="https://wa.me/+59163213679"><FaWhatsapp /></Link>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div> 
            </div>
        </div>
    )
}
export default Nav;