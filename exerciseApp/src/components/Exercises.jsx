import React, { useEffect, useState } from 'react'
import { fetchData,options } from '../utils/fetchData';
function Exercises({bodyPart,search}) {
  console.log("rendering exercisee comp ")
  const [allexercises,setAllExercises]=useState([]);
  useEffect(()=>{

console.log("inside useeffect")
const getExercisesByBodyPart=async()=>
  {
    const response=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=100`,options);
    console.log(response);
    setAllExercises(response);
  }
  
  const getExercisesBySearchFilter=async()=>{
    const response=await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=400'
          ,options);
          const filteredList=response.filter((item)=>
          item.name.toLowerCase().includes(search)||
          item.target.toLowerCase().includes(search)||
          item.equipment.toLowerCase().includes(search)||
          item.bodyPart.toLowerCase().includes(search)
      )
      setAllExercises(filteredList);
  }

  const getExercisesByBothParam=async()=>{
    const response=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=100`,options);
    const filteredList=response.filter((item)=>
      item.name.toLowerCase().includes(search)||
      item.target.toLowerCase().includes(search)||
      item.equipment.toLowerCase().includes(search)||
      item.bodyPart.toLowerCase().includes(search)
  )
  setAllExercises(filteredList);
  }
if(search=="" && bodyPart=="")
{
  console.log("both filters empty")
  setAllExercises([]);
}
else if(search=="" && bodyPart!="")
{
  getExercisesByBodyPart();
}
else if(search!="" && bodyPart=="")
{
  getExercisesBySearchFilter();
}
else
{
console.log("both parameters are set")
  getExercisesByBothParam();
}




  },[bodyPart,search])
  return (
    <div>
      {/* {allexercises.length} */}
      {allexercises && allexercises.map((exercise)=>(
        <div key={exercise.id}>{exercise.name} - {exercise.bodyPart}</div>
      ))}
    </div>
  )
}

export default Exercises
