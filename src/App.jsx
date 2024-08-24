import React from 'react'
import { Routes, Route } from "react-router-dom"
import Layout from './pages/layout/Layout'
import Home from './pages/home/Home'
import Wishlist from './pages/wishlist/Wishlist'
import Login from './pages/login/Login'
import Not from './components/not-found/Not'
import Shop from './components/shop/Shop'
import Admin from './pages/admin/Admin'
import Prof from "./pages/admin/Profil";
import User from "./pages/admin/User";
import Auth from './components/auth/Auth'

const App = () => {
  return (
    <div className="  p-3  dark:text-white dark:bg-black min-h-screen ">
     <>  
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="products/:id" element={<Shop/>}/>
        <Route path="wishlist" element={<Wishlist/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="*" element={<Not/>}/>
        <Route path="/" element={<Auth/>} >
        <Route path="/Admin/*" element={<Admin/>}>
          <Route path="profil" element={<Prof/>} />
          <Route path="user" element={<User/>} />
        </Route>
        </Route>
        </Route>
      </Routes>

    </>
    </div>
  )
}

export default App