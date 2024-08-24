import React from 'react'
import { Link } from 'react-router-dom'

function ExerciseCard({exercise}) {
  return (
    <Link to={`/exercise/${exercise.id}`} className='flex flex-col justify-center items-center bg-white shadow-md border-t-4 border-orange-600 px-4 py-3 gap-y-4  hover:shadow-lg hover:border-2 hover:border-orange-600 min-w-[400px]'>
      <img src={exercise.gifUrl} alt="exercise" className='w-64 h-64' loading='lazy'/>
      <div className='w-full flex flex-row justify-start gap-x-5'>
      <button className=' cursor-pointer rounded-2xl text-white bg-pink-400 hover:bg-pink-200 px-3 py-2 capitalize text-sm'>{exercise.bodyPart}</button>
      <button className='rounded-2xl text-white bg-yellow-400 hover:bg-yellow-200 px-3 py-2 capitalize text-sm'>{exercise.target}</button>
    </div>
    <div className='w-full font-semibold text-xl capitalize text-left'>{exercise.name}</div>
    </Link>
  )
}

export default ExerciseCard
