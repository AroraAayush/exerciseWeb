import React, { useEffect, useState } from 'react'
import { fetchData,options } from '../utils/fetchData'
import SimilarExercisesDisplay from './SimilarExercisesDisplay';
import Loader from './Loader';
function ExercisesWithSimilarEquipment({equipment}) {
    const [exercisesWithEqp,setExercisesWithEqp]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const getExercisesWithSimilarEquipment=async()=>{
            if(equipment)
        {
            const response=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`,options);
            console.log(response);
            setExercisesWithEqp(response);
            
        }
        setLoading(false)
        }
        getExercisesWithSimilarEquipment();
    },[equipment])

  return (
    <div className='px-10'>
        <div className='text-2xl font-semibold tracking-wide'>Similar <span className='text-red-500 font-bold capitalize'>Equipment </span> Exercises </div>
      {loading==true?<Loader/>:<SimilarExercisesDisplay exercises={exercisesWithEqp}/>}
    </div>
  )
}

export default ExercisesWithSimilarEquipment
