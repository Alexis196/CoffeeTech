import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Descripcion from './components/Descripcion/Descripcion'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenidos a Coffee Tech' />} />
        <Route path='/item/:id' element={<Descripcion />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
