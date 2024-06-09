import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBarComponent from '../components/NavBarComponents/NavBarComponent'
import Home from '../pages/Home'
import Item from '../pages/Item'
import Category from '../pages/Category'

const MainRouter = () => {
  return (
    <BrowserRouter>
        <NavBarComponent/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/item/:id' element={<Item/>} />
            <Route path='/category/:id' element={<Category/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default MainRouter
