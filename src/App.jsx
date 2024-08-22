import React from 'react'
import { Routes, Route } from "react-router-dom"
import Layout from './pages/layout/Layout'
import Home from './pages/home/Home'
import Wishlist from './pages/wishlist/Wishlist'
import Login from './pages/login/Login'
import Not from './components/not-found/Not'

const App = () => {
  return (
    <div className="  p-3  dark:text-white dark:bg-black min-h-screen ">
     <>  
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="wishlist" element={<Wishlist/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="*" element={<Not/>}/>
        </Route>
      </Routes>
    </>
    </div>
  )
}

export default App