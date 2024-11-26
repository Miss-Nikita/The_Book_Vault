import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/home/Layout'
import DetailLayout from '../components/Details/DetailLayout'
import SearchLayout from '../components/Search/SearchLayout'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'

const Approutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/detail/:name' element={<DetailLayout/>}/>
        <Route path='/search/:query' element={<SearchLayout/>}/>
        <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default Approutes