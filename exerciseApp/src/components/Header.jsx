import React from 'react'
import {Logo,Navbar} from './index'
function Header() {
  return (
    <div className='w-full ml-10 mr-10 mt-6 mb-5'>
    <div className='flex justify-start gap-x-32'>
      <Logo/>
      <Navbar/>
    </div>
    </div>
  )
}

export default Header
