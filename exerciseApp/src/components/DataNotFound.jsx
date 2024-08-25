import React from 'react'
import datanotfound from '../assets/images/datanotfound.png'
function DataNotFound() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-y-3'><img src={datanotfound} className='w-52 h-52 ' alt="datanotdound" /> <div className='text-xl font-semibold'>No data Available</div></div>
  )
}

export default DataNotFound
