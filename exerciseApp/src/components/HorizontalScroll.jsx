import React, { useContext, useEffect, useRef, useState } from 'react'
import { fetchData,options } from '../utils/fetchData';
import {BodyPart,Loader} from './index'
import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'
import { ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu';


function HorizontalScroll({bodyPart,setBodyPart,setParameter}) {
  const [loading,setLoading]=useState(true);
  console.log("rendering horizontal scroll component")
    const [bodyParts,setBodyParts]=useState([])
    
    useEffect(()=>{
    
        async function getBodyParts(){
        const response=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList'
            ,options);
            console.log(response);
            setBodyParts(response);
            console.log("setting loading false")
            setLoading(false);
        }
        getBodyParts();
    },[])

    const LeftArrow=()=>{
      const {scrollPrev}=useContext(VisibilityContext);
      return (
        <div onClick={()=>scrollPrev()}>
          <img src={LeftArrowIcon} alt="leftarrow" />
        </div>
      )
    }
    const RightArrow=()=>{
      const {scrollNext}=useContext(VisibilityContext);
      return (
        <div onClick={()=>scrollNext()}>
          <img src={RightArrowIcon} alt="rightarrow" />
        </div>
      )
    }
    const ref=useRef();

    const handleScroll=(direction)=>{
      console.log(ref)
      if(direction=="right")
      ref.current.scrollLeft+=300;
    else
      ref.current.scrollLeft-=300;

    }
  return (

    // <ScrollMenu LeftArrow={LeftArrowIcon} RightArrow={RightArrowIcon}>
<>
    
    {loading==true ? <div><Loader/> </div> : (bodyParts && bodyParts.length>0? <div><div ref={ref} className='flex flex-row overflow-x-auto scrollbar-none overflow-y-hidden gap-x-8 mt-10 px-3 py-4 transition duration-1000 delay-75 ease-in-out'>
      {bodyParts && bodyParts.map((part)=>(
      <div key={part}><BodyPart part={part} bodyPart={bodyPart} setBodyPart={setBodyPart} setParameter={setParameter}/></div>
      ))}
      </div>
      <div className='w-full flex flex-row justify-end gap-x-8 pr-6 mt-4'>
        <img className='hover:scale-110 hover:ease-in-out duration-150 p-2  rounded-md' src={LeftArrowIcon} alt="" onClick={()=>handleScroll("left")} />
        <img className='hover:scale-110 hover:ease-in-out duration-150 p-2  rounded-md'  src={RightArrowIcon} alt="" onClick={()=>{handleScroll("right")}} />
      </div>
      </div>
       :<div></div>)
      
      
      
      }
      </>
    // </ScrollMenu>
    
  )
}

export default HorizontalScroll
