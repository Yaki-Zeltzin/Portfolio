import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>Yaki Zeltzin </a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Acerca de mi</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#portfolio">Portafolio</a></li>
        <li><a href="#testimonials">Testimonios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/yaki-romero/"><BsLinkedin/></a>
        <a href="https://github.com/Yaki-Zeltzin"><FaGithub/></a>
        <a href="https://twitter.com"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Yaki All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer