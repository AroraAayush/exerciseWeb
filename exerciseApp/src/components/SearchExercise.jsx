import React, { useState } from 'react'

// import {options,fetchData} from '../utils/fetchData'

function SearchExercise({setSearch,setParameter}) {
    const [val,setVal]=useState("");
    console.log("Rendering search component")
        const searchExercise=async()=>{
            setSearch(val);
            setParameter("search");
       
    }
  return (
    <div className='w-full flex flex-col justify-start items-center mt-20 px-5'>
        <div className='flex justify-center font-bold text-3xl max-w-[450px] text-center tracking-wide'>
            Awesome Exercises You Should Know
        </div>
    
            <div className='w-full flex justify-center items-center mt-10'>
                <input className='w-2/3 min-w-2/3 px-3 py-2 border-gray-400 border-2 rounded-l-md' type="text" placeholder='Search Exercises' value={val} onChange={(e)=>{setVal(e.target.value)}}/>
                <button className='bg-orange-600 text-white px-3 py-2 rounded-r-md' onClick={searchExercise}>Search</button>
            </div>


      
    </div>
  )
}

export default SearchExercise
