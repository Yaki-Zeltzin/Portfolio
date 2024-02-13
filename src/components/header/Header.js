import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/meBlack.jpg'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola, yo soy</h5>
        <h1>Yaki Zeltzin Romero Trejo</h1>
        <h5 className="text-light">Desarrollador Web</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header