import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import { Header,Home,Footer, ExerciseDetail } from './components/index'
function App() {
  // console.log(String(import.meta.env.VITE_RAPID_API_KEY))
  return (
    <div className='w-full relative'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}
export default App
