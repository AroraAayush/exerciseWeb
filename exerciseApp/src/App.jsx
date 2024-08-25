import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import { Header,Home,Footer, ExerciseDetail } from './components/index'
import { useDispatch,useSelector} from 'react-redux'
import { changeNetworkStatus } from './store/exerciseSlice'
function App() {
  // const dispatch=useDispatch();
  
//   useEffect(()=>{
//     console.log("checking network connection")
//     window.addEventListener('online', ()=> {console.log("user is online")})
//     window.addEventListener('offline', ()=> {console.log("user is offline")})

//     return ()=>{
//         window.removeEventListener('online', ()=> dispatch(changeNetworkStatus(true)))
//         window.removeEventListener('offline', ()=> dispatch(changeNetworkStatus(false)))
//     }
// },[])
// const status=useSelector((state)=>state.online)
// console.log("User is : ",status);
  // console.log(String(import.meta.env.VITE_RAPID_API_KEY))
  return (
    <div className='min-h-screen max-h-fit w-full relative'>
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
