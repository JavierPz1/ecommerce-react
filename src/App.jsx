import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer greetings="Hola mundo!!" />
    </>
  )
}

export default App
