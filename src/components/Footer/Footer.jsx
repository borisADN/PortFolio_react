import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaFacebookF, FaGithub } from 'react-icons/fa'

import './Footer.css'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>EGATOR</a>

      <ul className='permalinks'>
        <li><a href="#">Accueil</a></li>
        <li><a href="#about">A Propos</a></li>
        <li><a href="#experience">Experiences</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Temoignages</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><FaGithub/></a>
        <a href="https://dribbble.com" target="_blank"><FaFacebookF/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer