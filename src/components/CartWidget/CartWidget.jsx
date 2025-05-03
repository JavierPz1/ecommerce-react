import { IoCartSharp } from "react-icons/io5";
import { useAppContext } from "../../context/context";
import './CartWidget.css';

function CartWidget() {

    const { carrito } = useAppContext();

    const cantidadDeProductos = carrito.reduce((acc, el) => acc + el.cantidad, 0);
    const mostrarCantidad = cantidadDeProductos > 20 ? '+20' : cantidadDeProductos;

    return (
        <>
            <li className='item-nav-bar'><IoCartSharp className='cartWidget' />{mostrarCantidad}</li>
        </>
    )
}

export default CartWidget;