import React from 'react'
import './About.css'
import MeBlack from '../../assets/meBlack.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Quién soy</h5>
      <h2>Acerca de mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MeBlack} alt="about image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small>2+ Años trabajando</small>
            </article>

            <article className="about__card">
            <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>2+ empresas</small>
            </article>

            <article className="about__card">
            <VscFolderLibrary className='about__icon'/>
              <h5>Projectos</h5>
              <small>4+ Completados</small>
            </article>
          </div>

          <p>Tengo experienca trabajando con diferentes tecnologias cómo HTML, CSS, JavaScript, Java y Bases de Datos.
          </p>

          <a href="#contact" className='btn btn-primary'>Contáctame</a>
        </div>
      </div>
    </section>
  )
}

export default About