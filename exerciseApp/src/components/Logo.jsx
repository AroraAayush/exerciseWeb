import React from 'react'
import WebsiteLogo from '../assets/images/Logo.png'
import {Link} from 'react-router-dom'
function Logo() {
  return (
    <Link to={'/'}>
      <img src={WebsiteLogo} alt="logo" className='w-12 h-12' />
    </Link>
  )
}

export default Logo
