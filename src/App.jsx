import { useState } from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import Gender from './Components/Gender'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
    <main>
    <Outlet/>
    </main>
    
    
    </>
  )
}

export default App
