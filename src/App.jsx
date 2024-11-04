import React from 'react'
import Approutes from './routers/Approutes'
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/partials/Nav'

const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Approutes/>
   </BrowserRouter>
  )
}

export default App
