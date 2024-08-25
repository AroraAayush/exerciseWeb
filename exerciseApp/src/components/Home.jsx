import React from 'react'
import {Hero,SearchExercise,Exercises, HorizontalScroll} from './index'
import { useState } from 'react';
function Home() {
  const [bodyPart,setBodyPart]=useState("");
  const [parameter,setParameter]=useState("");
  const [search,setSearch]=useState("")

  // console.log("rendering home component with : , ",filteredExercises)
  return (
    <div id='home' className='min-h-screen max-h-fit px-6  w-full  mt-6 '>
      <Hero/>
      <SearchExercise setSearch={setSearch} setParameter={setParameter} />
      <HorizontalScroll bodyPart={bodyPart} setBodyPart={setBodyPart} setParameter={setParameter} />
      <Exercises bodyPart={bodyPart}  search={search}  />
    </div>
  )
}

export default Home
