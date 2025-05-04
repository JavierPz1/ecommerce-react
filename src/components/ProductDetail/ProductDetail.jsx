import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useAppContext } from '../../context/context';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import Loader from '../Loader/Loader';
import Count from '../Count/Count';
import './ProductDetail.css';


function ProductDetail() {

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProductDetail] = useState(null);
    const [contador, setContador] = useState(1);
    
    const { agregarAlCarrito } = useAppContext();

    const collectionProduct = collection(db, "productos");

     useEffect(() => {
    
            getDocs(collectionProduct).then(snapshot => {
                let arrayProducts = snapshot.docs.map(el => el.data());
                let productFind = arrayProducts.find(el => el.id === parseInt(id));
                setProductDetail(productFind);
    
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            }).catch(err => console.error(err));
            
    }, []);
        
    function sumarPrecioDetail() {
        if (contador > 1) {
            const precioSumado = product.precio * contador;
            return precioSumado
        } else {
            return product.precio
        }
    }

    return (

        loading ?

            <Loader />

            :

            <div className="card productCard">

                {
                    product ?
                        <>
                            <img src={product.img} alt="" className="imgProduct" />
                            <div className="card-body">
                                <h1 className="card-title">{product.nombre}</h1>
                                <p className="card-text">{product.categoria}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Color: {product.color}</li>
                                <li className="list-group-item">Disponibles: {product.stock}</li>
                                <li className="list-group-item">${sumarPrecioDetail()}</li>
                            </ul>

                            <Count stock={product.stock} contador={contador} setContador={setContador} />
                            
                            <div className="card-body ">
                                <button className="btn buttonCard" onClick={() => agregarAlCarrito(product, contador)}>Agregar al carrito</button>
                            </div>
                        </>
                        :
                    <p>Producto {id} no encontrado</p>
                }
            </div>
    )
}

export default ProductDetail;