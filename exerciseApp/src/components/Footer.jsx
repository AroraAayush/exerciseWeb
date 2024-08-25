import React from 'react'
import footerlogo from '../assets/images/Logo-1.png'
function Footer() {
  return (
    <div id='footer' className=' -bottom-0 min-h-[120px] w-full bg-orange-100 flex flex-col justify-center items-center gap-y-3'>
      <img src={footerlogo} alt="footer logo" />
      <div className='text-md tracking-tight '>Made with &#x2764;	 By Aayush Arora</div>
    </div>
  )
}

export default Footer
