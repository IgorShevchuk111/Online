import React from 'react'
import './NavBar.css'
import Logo from './Logo'
import AboutUs from './AboutUs'
import Help from './Help'
import Finder from './Finder/Finder'
import Login from './Login'
import Basket from './Basket'


function NavBar() {
  return (
      <div className='nav'>
        <div className='flex-1'>
          <Logo />
        </div>
        <div className='flex-2 body-2'>
          <AboutUs />
          <Help />
        </div>
        <div className='flex-3  '>
          <Finder />
        </div>
        <div className='flex-4 body-2'>
          <Login />
          <Basket />
        </div>
      </div>
  )
}

export default NavBar