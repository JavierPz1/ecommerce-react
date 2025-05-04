import { useEffect, useState } from 'react';
import { useAppContext } from '../../context/context';
import Loader from '../Loader/Loader';
import './Carrito.css';

function Carrito() {

    const [loading, setLoading] = useState(true);
    const { carrito } = useAppContext();

    const totalPrice = carrito.reduce((acc, el) => acc + (el.cantidad * el.precio), 0);

    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    })

    return (

        loading ?

            <Loader />

            :


            <div>
                <div className='containerProducts'>
                    {
                        carrito.map(el => {
                            return (

                                <div className="card productCard" key={el.id}>

                                    <img src={el.img} alt="" className="imgProduct" />
                                    <div className="card-body">
                                        <h1 className="card-title">{el.nombre}</h1>
                                        <p className="card-text">{el.categoria}</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Color: {el.color}</li>
                                        <li className="list-group-item">Cantidad: {el.cantidad}</li>
                                    </ul>
                                    <p className="m-3">Precio por unidad: ${el.precio}</p>
                                    <h4 className="m-3">Subtotal: <span>${el.precio * el.cantidad}</span></h4>
                                </div>

                            );
                        })
                    }
                </div>
                <h1 className="m-5"> Compra Total: {totalPrice}</h1>
                <button className="btn buttonCard mx-5 mb-5">Finalizar Compra</button>
            </div>
    )
};

export default Carrito;