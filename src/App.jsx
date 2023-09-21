import React from 'react'
import './App.css'
import { Companies, Hero, Navbar } from './component'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Companies/>
    </div>
  )
}

export default App