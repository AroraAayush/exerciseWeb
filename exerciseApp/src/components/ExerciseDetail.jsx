import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Details, ExercisesWithSimilarEquipment,ExercisesWithSimilarTarget, ExerciseVideos, Loader} from './index'

import { options,fetchData } from '../utils/fetchData';
// import ExercisesWithSimilarTarget from './ExercisesWithSimilarTarget';
function ExerciseDetail() {
    const param=useParams();
    const [loading,setLoading]=useState(true);
    const id=param["id"]
    // const [exerciseName,setExerciseName]=useState("");
    const [exerciseDetail,setExerciseDetail]=useState({})
    useEffect(()=>{
      
        console.log("insde useffect with id : ",id)
        const getExerciseById=async()=>
            {
              const response=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,options);
              console.log(response);
              setExerciseDetail(response);
              setLoading(false)
              // setExerciseName(response.name)
            }
          
        getExerciseById();
        
    },[id])
  return (
    <div className=''>
    {loading==true?<Loader/>:<div>
      <Details exerciseDetail={exerciseDetail}/>
    <ExerciseVideos exerciseName={exerciseDetail.name} />
    <ExercisesWithSimilarEquipment equipment={exerciseDetail.equipment}/>
    <ExercisesWithSimilarTarget target={exerciseDetail.target}/>

    </div>}
    
    </div>
  )
}

export default ExerciseDetail
