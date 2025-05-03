import { BrowserRouter, Route, Routes } from 'react-router';
import { ContextProvider } from './context/context';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Carrito from './components/Carrito/Carrito';
import './App.css';

function App() {

  return (

    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ProductDetail />} />
          <Route path='/carrito'element={<Carrito/>} />
          <Route path='*' element={"Error 404, this page is not found"} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>

  )
}

export default App;