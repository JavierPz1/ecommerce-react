import { IoCartSharp } from "react-icons/io5"
import './CartWidget.css'

function CartWidget() {

    return (
        <>
            <li className='item-nav-bar'><IoCartSharp className='cartWidget' />0</li>
        </>
    )
}

export default CartWidget