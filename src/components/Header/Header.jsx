import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello, moi c'est</h5>
            <h1>Boris</h1>
            <h5 className="text-light">Devellopeur Fullstack</h5>
            <CTA />
            <HeaderSocials />

            <div className="me">
                <img src={ME} alt="me" />
            </div>

            <a href="#footer" className="scroll__down">Aller Tout En Bas</a>
        </div>
    </header>
    
  )
}

export default Header