import './ProductDetail.css'
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { fetchData } from '../../fetchData';
import Loader from '../Loader/Loader';


function ProductDetail() {

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProductDetail] = useState(null);

    useEffect(() => {

        fetchData()
            .then(response => {
                const productFind = response.find(el => el.id === parseInt(id));
                setProductDetail(productFind);
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            })
            .catch(err => console.error(err));
    }, []);



    return (

        loading ?

            <Loader />

            :

            <div className="card productCard">

                {
                    product ?
                        <>
                            <p>img</p>
                            <div className="card-body">
                                <h5 className="card-title">{product.nombre}</h5>
                                <p className="card-text">{product.categoria}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Disponibles: {product.stock}</li>
                                <li className="list-group-item">Color: {product.color}</li>
                                <li className="list-group-item">${product.precio}</li>
                            </ul>
                            <div className="card-body ">
                                <button className="btn buttonCard" onClick={() => console.log("Producto agregado correctamente", product)}>Agregar al carrito</button>
                            </div>
                        </>
                        :
                    <p>Producto {id} no encontrado</p>
                }
            </div>
    )
}

export default ProductDetail