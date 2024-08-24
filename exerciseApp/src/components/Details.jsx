import React, { useEffect, useState } from 'react'

import BodyPartImg from '../assets/icons/body-part.png'
import Equipment from '../assets/icons/equipment.png'
import Target from '../assets/icons/target.png'
function Details({exerciseDetail}) {
    
  return (
    <div className='w-full  px-10'>
      <div className='flex flex-row w-full min-h-[500px] justify-evenly items-center'>
        <div>
            <img src={exerciseDetail.gifUrl} alt="" className='min-w-100 min-h-100' />
        </div>
        <div className='flex flex-col justify-start gap-y-5'>
            <div className='font-bold text-4xl capitalize max-w-[500px]'>{exerciseDetail.name}</div>
            <div className='max-w-[350px] text-lg '>Exercise keep you strong. <span>{exerciseDetail.name}</span> is one of the best exercises to targer your {exerciseDetail.target}. It will help you improve your mood and gain energy.</div>
            <div className='flex flex-col gap-y-3 mt-4'>
                <div className='flex flex-row justify-start gap-x-5 items-center'>
                    <img className='bg-yellow-50 shadow-md rounded-full p-2' src={BodyPartImg} alt="" />
                    <span className='text-lg capitalize font-semibold'>{exerciseDetail.bodyPart}</span>
                </div>
                <div className='flex flex-row justify-start gap-x-5 items-center'>
                    <img className='bg-yellow-50 shadow-md rounded-full p-2' src={Equipment} alt="" />
                    <span className='text-lg capitalize font-semibold'>{exerciseDetail.equipment}</span>
                </div>
                <div className='flex flex-row justify-start gap-x-5 items-center'>
                    <img className='bg-yellow-50 shadow-md rounded-full p-2' src={Target} alt="" />
                    <span className='text-lg capitalize font-semibold'>{exerciseDetail.target}</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Details
