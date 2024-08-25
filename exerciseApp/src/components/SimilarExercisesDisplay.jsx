import React, { useEffect, useRef, useState } from 'react'
import ExerciseCard from './ExerciseCard'
import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'
import Skeleton from 'react-loading-skeleton';
import Loader from './Loader';
import DataNotFound from './DataNotFound';
function SimilarExercisesDisplay({exercises}) {
  const [loading,setLoading]=useState(true);
    const ref=useRef();
    console.log(exercises)
    useEffect(()=>{
      setLoading(false);
    },[])
    const handleScroll=(direction)=>{
        console.log(ref)
        if(direction=="right")
        ref.current.scrollLeft+=ref.current.scrollWidth/2;
      else
        ref.current.scrollLeft-=ref.current.scrollWidth/2;
  
      }
  return (
    <>{loading==true?<Loader/>:(exercises && exercises.length>0?<div>
      <div ref={ref} className='flex flex-row overflow-x-auto scrollbar-none overflow-y-hidden gap-x-8 mt-6 px-3 py-4 transition delay-500 duration-1000 ease-in-out'>

      {exercises && exercises.map((exercise)=>(
      <div key={exercise.id}><ExerciseCard exercise={exercise}/></div>
      ))}
      
      </div>
      <div className='w-full flex flex-row justify-end gap-x-8 pr-6 mt-4'>
        <img className='hover:scale-110 hover:ease-in-out duration-150 p-2  rounded-md' src={LeftArrowIcon} alt="" onClick={()=>handleScroll("left")} />
        <img className='hover:scale-110 hover:ease-in-out duration-150 p-2  rounded-md'  src={RightArrowIcon} alt="" onClick={()=>{handleScroll("right")}} />
      </div>
      </div>:<DataNotFound/>)}
      </>
  )
}

export default SimilarExercisesDisplay
