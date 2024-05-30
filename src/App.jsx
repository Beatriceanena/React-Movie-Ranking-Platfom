import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './assets/Pages/Home'
import './App.css'
import Adventure from './assets/Pages/Adventure'
import Drama from './assets/Pages/Drama'
import Thriller from './assets/Pages/Thriller'
import Action from './assets/Pages/Action'

const App = () => {
  return (
    <div>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Adventure' element={<Adventure />}/>
      <Route path='/Drama' element={<Drama />}/>
      <Route path='/Thriller' element={<Thriller />}/>
      <Route path='/Action' element={<Action />}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App