import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo'
import './Navbar.css'

function Navbar() {

  return (
    <>
      <header>
        <ul className='nav-bar'>
          <Logo/>
          <li className='item-nav-bar'>Inicio</li>
          <li className='item-nav-bar'>Productos</li>
          <li className='item-nav-bar'>Contacto</li>
          <CartWidget/>
        </ul>
      </header>
    </>
  )
}

export default Navbar