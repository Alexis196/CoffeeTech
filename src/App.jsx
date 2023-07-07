import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartWidget from './components/CartWidget/CartWidget'

function App() {

  return (
    <>
      <Navbar>
        <CartWidget/>
      </Navbar>
      <ItemListContainer greeting='Bienvenidos a Coffee Tech'/>
    </>
  )
}

export default App
