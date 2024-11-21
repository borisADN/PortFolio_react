import React, { useState } from 'react'
import './Nav.css'

import { CiUser } from 'react-icons/ci'
import { FaBook, FaHeadset } from 'react-icons/fa'
import { GrServices } from 'react-icons/gr'
import { IoHomeOutline } from 'react-icons/io5'
import { TbMessage } from 'react-icons/tb'

const Nav = () => {
 const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className= {activeNav === '#' ? 'active' : ''}><IoHomeOutline/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><CiUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><GrServices /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TbMessage /></a>


      
    </nav>
  )
}

export default Nav
