import React, { useState,useEffect } from 'react'
import SimilarExercisesDisplay from './SimilarExercisesDisplay';
import { fetchData,options } from '../utils/fetchData';
function ExercisesWithSimilarTarget({target}) {
    const [exercisesWithTarget,setExercisesWithTarget]=useState([]);
    useEffect(()=>{
        const getExercisesWithSimilarTarget=async()=>{
            if(target)
        {
            const response=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${target}`,options);
            console.log(response);
            setExercisesWithTarget(response);
        }
        }
        getExercisesWithSimilarTarget();
    },[target])

  return (
    <div className='px-10'>
        <div className='text-2xl font-semibold tracking-wide'>Similar <span className='text-red-500 font-bold capitalize'>Target </span> Exercises </div>
      <SimilarExercisesDisplay exercises={exercisesWithTarget}/>
    </div>  )
}

export default ExercisesWithSimilarTarget
