import { Link } from 'react-router';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import './Navbar.css';

function Navbar() {

  return (
    <>
      <header>
        <ul className='nav-bar'>
          <Logo />

          <Link to={"/"} className='link'>
            <li className='item-nav-bar'>Inicio</li>
          </Link>

          <Link to={"/categoria/smartwatch"} className='link'>
          <li className='item-nav-bar'>Smartwatch</li>
          </Link>

          <Link to={"/categoria/auriculares"} className='link'>
          <li className='item-nav-bar'>Auriculares</li>
          </Link>
          
          <Link to={"/carrito"} className='link'>
          <CartWidget />
          </Link>
        </ul>
      </header>
    </>
  )
}

export default Navbar;