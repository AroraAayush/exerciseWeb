import React, { useEffect } from 'react'
import { options2,fetchData } from '../utils/fetchData';
function ExerciseVideos({exerciseName}) {
    useEffect(()=>{
         const searchYoutubeVideos=async()=>{
          const response=await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?q=aayush`,options2);
          console.log(response)
         }

         searchYoutubeVideos();
    },[exerciseName])
  return (
    <div className='px-10'>
        <div className='text-2xl font-semibold tracking-wide'>Watch <span className='text-red-500 font-bold capitalize'>{exerciseName}</span> Exercise Videos</div>
      
    </div>
  )
}

export default ExerciseVideos
