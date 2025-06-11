import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



import Layout from '../components/Layout/Layout'

import NotFound from './NotFound'
import SignIn from '../features/auth/pages/Signin'
import Home from '../features/home/pages/Home'
import CategoryGrossary from '../features/product/pages/CategoryGrossary'

import CategoryElectronics from '../features/product/pages/CategoryElectronics'
import Search from '../features/product/pages/Search'
import Cart from '../features/cart/pages/Cart'






function Routing() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/login' element={<SignIn />} />
            <Route path='/category/Grocery' element={<CategoryGrossary />} />
            <Route path='/category/Electronics' element={<CategoryElectronics />} />
            <Route path='/Search' element={<Search />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
          <Route path='*' element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing