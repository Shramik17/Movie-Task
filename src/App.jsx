import {BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Upcoming from './components/Upcoming/Upcoming'
import Toprated from './components/Toprated/Toprated'
import React from 'react'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/top-rated' element={<Toprated/>}/>
          <Route path='/upcoming' element={<Upcoming/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App