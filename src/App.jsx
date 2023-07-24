import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetail from './components/ItemDetail/ItemDetail'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenidos a Coffee Tech' />} />
        <Route path='/item/:id' element={<ItemDetail />} />
        <Route path='/category/:id' element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
