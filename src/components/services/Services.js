import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>¿Qué ofrezco?</h5>
      <h2>Servicios</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Front-End Developer</h3>
          </div>

          <ul className="service__list">
              <li>
                <BiCheck  className='service__list-icon'/>
                <p>Desarrollar aplicaciones orientadas al usuario y supervisar su eficacia.</p>
              </li>
              <li>
                <BiCheck  className='service__list-icon'/>
                <p>Traducir el diseño de un sitio a codigo.</p>
              </li>
              <li>
                <BiCheck  className='service__list-icon'/>
                <p>Estructurar el contenido semánticamente.</p>
              </li>
              <li>
                <BiCheck  className='service__list-icon'/>
                <p>Optimizar la aplicación en cuanto a accesibilidad y rendimiento.</p>
              </li>
              <li>
                <BiCheck  className='service__list-icon'/>
                <p>Comprender las necesidades de la empresa/usuarios y trabajar con el personal pertinente para garantizar la máxima eficacia de las páginas web.</p>
              </li>
          </ul>
        </article>
        {/*END OF UX/UI*/}

        <article className="service">
          <div className="service__head">
            <h3>Backend</h3>
          </div>

          <ul className="service__list">
              <li>
                <BiCheck  className='service__list-icon'/>
                <p>Diseñar y mantener bases de datos.</p>
              </li>
              <li>
                <BiCheck  className='service__list-icon'/>
                <p>Desarrollo de API's.</p>
              </li>
              <li>
                <BiCheck  className='service__list-icon'/>
                <p>Gestionar servidores.</p>
              </li>
              <li>
                <BiCheck  className='service__list-icon'/>
                <p>Trabajar mano a mano con el front end developer.</p>
              </li>
              <li>
                <BiCheck  className='service__list-icon'/>
                <p>Conectar la aplicación con servicios de terceros internos.</p>
              </li>
          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT*/}

        <article className="service">
          <div className="service__head">
            <h3>QA Testing</h3>
          </div>

          <ul className="service__list">
              <li>
                <BiCheck  className='service__list-icon'/>
                <p>Examinar requerimientos.</p>
              </li>
              <li>
                <BiCheck  className='service__list-icon'/>
                <p>Planificar estrategias para el testing.</p>
              </li>
              <li>
                <BiCheck  className='service__list-icon'/>
                <p>Ejecución de pruebas.</p>
              </li>
              <li>
                <BiCheck  className='service__list-icon'/>
                <p>Analizar, registrar y evaluar resultados obtenidos de las pruebas.</p>
              </li>
              <li>
                <BiCheck  className='service__list-icon'/>
                <p>Plantear posibles soluciones, ejecutar y validar las modificaciones.</p>
              </li>
          </ul>
        </article>
        {/*END OF Backend*/}
      </div>
    </section>
  )
}

export default Services