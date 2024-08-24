import React from 'react'
import HeroImg from '../assets/images/banner.png'
function Hero() {
  return (
    <div className='w-full  flex flex-row justify-between'>
    <div className='w-full flex flex-col justify-start items-start ml-7'>
        <div className='font-semibold text-7xl bg-gradient-to-r from-orange-300 via-orange-500 to-orange-700  text-transparent bg-clip-text mb-5 mt-28'>Fitness Club</div>
        <div className='font-medium text-4xl bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600  text-transparent bg-clip-text tracking-tight mb-5'>Sweat, Smile <br/> And Repeat</div>
        <div className='font-normal text-xl mb-4'>Check the most effective exercises for personal growth</div>
        <button className='bg-orange-600 text-white px-3 py-2 text-lg rounded-md tracking-tight mb-8'>Explore Exercises</button>
      <div className='w-full flex justify-start ml-28 text-red-400 items-center text-10xl font-extrabold text- opacity-15 tracking-wide'>EXERCISE</div>
    </div>
    <img src={HeroImg} alt="" className='absolute -top-10 right-0 mr-56 h-screen'/>
    </div>
  )
}

export default Hero
