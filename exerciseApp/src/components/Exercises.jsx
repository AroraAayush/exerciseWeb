import React, { useEffect, useState } from 'react'
import { fetchData,options } from '../utils/fetchData';
// import ReactPaginate from 'react-paginate';
import {Pagination} from '@mui/material'
import ExerciseCard from './ExerciseCard';
function Exercises({bodyPart,search}) {
  console.log("rendering exercisee comp ")
  const [allexercises,setAllExercises]=useState([]);
  const [currentPage,setcurrentPage]=useState(1);
  const exercisesPerPage=9;
  const indexOfLastExercise=currentPage*exercisesPerPage;
  const indexOfFirstExercise=indexOfLastExercise-exercisesPerPage;
  const currentExercises=allexercises.slice(indexOfFirstExercise,indexOfLastExercise);
  const paginate=(e,val)=>{
    setcurrentPage(val);
    window.scrollTo({behavior:'smooth',top:1200})

  }
  useEffect(()=>{
setcurrentPage(1);
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
      <div className='text-3xl mt-10 mb-4'>Showing Results</div>
      <div className='flex flex-wrap gap-x-9 gap-y-10 justify-center items-center'>      {currentExercises && currentExercises.map((exercise)=>(
        <div key={exercise.id}><ExerciseCard exercise={exercise}/></div>
      ))}
      </div>
<div className='w-full flex justify-center mt-10'>
      {allexercises.length>9 && 
      (<Pagination 
      variant="outlined" 
      color="primary"
      // shape='rounded'
      defaultPage={1}
      count={Math.ceil(allexercises.length/exercisesPerPage)}
      page={currentPage}
      onChange={paginate}
      />)}
      </div>
    </div>
  )
}

export default Exercises
