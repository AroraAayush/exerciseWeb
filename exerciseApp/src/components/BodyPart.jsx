import React from 'react'
import gym from '../assets/icons/gym.png'
function BodyPart({part,bodyPart,setBodyPart,setParameter}) {
  return (
    <div onClick={()=>{
        console.log(bodyPart);
        if(bodyPart==part)
          setBodyPart("")
        else
        setBodyPart(part);
      setParameter("bodyPart")
    }} className={`${part==bodyPart?"border-t-4 border-orange-600 shadow-lg":"border-2 shadow-md border-gray-200"} min-h-36 min-w-36 w-36 h-36 flex flex-col px-3 py-3 justify-center items-center gap-y-5 transition ease-in-out delay-100  hover:border-orange-500 hover:border-2 hover:scale-110  duration-200 cursor-pointer`}>

        <img src={gym} className='min-w-10 w-10' alt="" />
        <div className='font-semibold text-lg'>{part.toString().toUpperCase()}</div>
    </div>
  )
}

export default BodyPart
