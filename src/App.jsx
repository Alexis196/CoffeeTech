import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetail from './components/ItemDetail/ItemDetail'
import Cart from './components/Cart/Cart'
import ErrorPage from './components/ErrorPage/ErrorPage'
import { CartContextProvider } from './context/cartContext';
import Checkout from './components/Checkout/Checkout'

import { initializeApp } from "firebase/app";


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenidos a Coffee Tech' />} />
          <Route path='/item/:id' element={<ItemDetail />} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
