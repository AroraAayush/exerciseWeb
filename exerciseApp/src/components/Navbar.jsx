import React from 'react'
import { Link } from 'react-scroll'
function Navbar() {
  return (
    <div className='flex justify-start items-center gap-x-8 text-xl font-normal'>
      <Link activeClass="active" to="home" spy="true" smooth="true" offset={-100} className=" cursor-pointer" duration={500}>Home</Link>
      <Link activeClass="active" to="footer" spy="true" smooth="true" offset={-100} className=" cursor-pointer" duration={500}>Exercises</Link>
    </div>
  )
}

export default Navbar
