import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'ZelMarket',
    githubu: 'https://github.com/Yaki-Zeltzin/proyecto-react-2022',
    demo: 'https://zelmarket.vercel.app/login'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Data-Lovers',
    githubu: 'https://github.com/Yaki-Zeltzin/DEV006-data-lovers',
    demo: 'https://yaki-zeltzin.github.io/DEV006-data-lovers/src/index.html'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Rick & Morty',
    githubu: 'https://github.com/Yaki-Zeltzin/rick-morty-api',
    demo: 'https://glittery-melomakarona-057081.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'SimpsonCharacter',
    githubu: 'https://github.com/Yaki-Zeltzin/Simpson-character',
    demo: 'https://simpson-character.vercel.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Marvel',
    githubu: 'https://github.com/Yaki-Zeltzin/Marvel-react',
    demo: 'https://marvel-react-rb0ngytpq-yaki-zeltzin.vercel.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Card Validation',
    github: 'https://github.com/Yaki-Zeltzin/DEV006-card-validation',
    demo: 'https://yaki-zeltzin.github.io/DEV006-card-validation/src/main.html'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mi trabajo reciente</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='blank'>Ir al demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio