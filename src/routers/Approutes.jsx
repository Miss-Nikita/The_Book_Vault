import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/partials/home/Layout'

const Approutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}/>
    </Routes>
  )
}

export default Approutes
