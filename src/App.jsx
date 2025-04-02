import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ProductDetail from './components/ProductDetail/ProductDetail'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ProductDetail />} />
          <Route path='*' element={"Error 404, this page is not found"} />
          <Route path='/carrito'/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
