import axios from 'axios'
import { Routes, Route } from 'react-router'
import { useState, useEffect } from 'react'
import { HomePage } from './Pages/HomePage'
import { CheckoutPage } from './Pages/CheckoutPage'
import { OrdersPage } from './Pages/ordersPage'
import { TrackingPage } from './Pages/TrackingPage'
import './App.css'

function App() {
  const [cart, setCart] = useState([])

    useEffect(()=>{
            axios.get('http://localhost:3000/api/cart-items')
    .then((response)=>{
      setCart(response.data);
    })
    }, [])


  return ( 
    <Routes>
      <Route path="/" element={<HomePage cart={cart} />}></Route>
      <Route path="/checkout" element={<CheckoutPage cart={cart} />}></Route>
      <Route path="/orders" element={<OrdersPage />}></Route>
      <Route path="/tracking" element={<TrackingPage />}></Route>
    </Routes>
    
  
  )
}

export default App
