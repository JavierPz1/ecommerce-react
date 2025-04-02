import { Link } from 'react-router';
import './ProductCard.css'


function ProductCard({producto}) {

    const { id, nombre, precio, color, img } = producto;

    return (
        <div className="card productCard">
                <p>img</p>
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Color: {color}</li>
                        <li className="list-group-item">${precio}</li>
                    </ul>
            <div className="card-body ">
                <Link to={`/detalle/${id}`}>
                    <button className="btn buttonCard">Ver Mas</button>
                </Link>
                <button className= "btn buttonCard" onClick={() => console.log("Producto agregado correctamente", producto)}>Agregar al carrito</button>
                    </div>
            </div>
    )
}

export default ProductCard