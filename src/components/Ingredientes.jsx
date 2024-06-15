function Ingredientes(props) {
    return (
        <div className="container">
            <div className="row">
            <h1 className="title">{props.titulo}</h1>
                <div className="card" style={{width: "20rem"}}>
                    <img src={props.imagen} className="card-img-top" alt="..." />
                </div>
                <div>
                        <h1 className="title">Ingredientes</h1>
                        <div dangerouslySetInnerHTML={{ __html: props.lista }} />
                        <h1 className="title">Preparacion</h1>
                        <div dangerouslySetInnerHTML={{ __html: props.preparacion }} />
                </div>
            </div>
        </div>
    );
}
export default Ingredientes;