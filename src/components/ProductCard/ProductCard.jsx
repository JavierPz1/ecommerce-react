import { Link } from 'react-router';
import { useAppContext } from '../../context/context';
import './ProductCard.css';


function ProductCard({ producto }) {

    const { id, img, nombre, precio, color, stock } = producto;

    const { agregarAlCarrito } = useAppContext();

    return (
        <div className="card productCard">
            <p>img</p>
            <div className="card-body">
                <h3 className="card-title">{nombre}</h3>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Color: {color}</li>
                <li className="list-group-item">Quedan {stock} disponibles</li>
                <li className="list-group-item">${precio}</li>
            </ul>
            <div className="card-body ">
                <Link to={`/detalle/${id}`}>
                    <button className="btn buttonCard">Ver Mas</button>
                </Link>
                <button className="btn buttonCard" onClick={() => agregarAlCarrito(producto, 1)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ProductCard;