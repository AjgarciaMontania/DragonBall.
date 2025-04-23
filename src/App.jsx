import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage'
import DetailsPage from './Pages/DetailsPage/DetailsPage'
import Acercade from './Pages/DetailsPage/Acercade'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import FilterPage from './Pages/FilterPage/FilterPage'




const App = () => {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/personaje/:id' element={<DetailsPage/>}/>
          <Route path='/Acercade/' element={<Acercade/>}/>
          <Route path='/filter/:gender' element={<FilterPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App