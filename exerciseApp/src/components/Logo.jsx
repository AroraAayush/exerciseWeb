import React from 'react'
import WebsiteLogo from '../assets/images/Logo.png'
function Logo() {
  return (
    <div>
      <img src={WebsiteLogo} alt="logo" className='w-12 h-12' />
    </div>
  )
}

export default Logo
