import React from 'react'
import './Testimonial.css'
// import AVTR1 from '../../assets/avatar1.jpg'
// import AVTR2 from '../../assets/avatar2.jpg'
// import AVTR3 from '../../assets/avatar3.jpg'
// import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    //avatar: AVTR1,
    name: 'Tina',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptate quo consequuntur expedita maxime? Cumque voluptatem perspiciatis perferendis libero mollitia minima minus. Vitae nesciunt quis assumenda id nulla quia laudantium.'
  },
  {
    //avatar: AVTR2,
    name: 'lore',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptate quo consequuntur expedita maxime? Cumque voluptatem perspiciatis perferendis libero mollitia minima minus. Vitae nesciunt quis assumenda id nulla quia laudantium.'
  }, {
    //avatar: AVTR3,
    name: 'Carlos',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptate quo consequuntur expedita maxime? Cumque voluptatem perspiciatis perferendis libero mollitia minima minus. Vitae nesciunt quis assumenda id nulla quia laudantium.'
  }, {
    //avatar: AVTR4,
    name: 'Edgar',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptate quo consequuntur expedita maxime? Cumque voluptatem perspiciatis perferendis libero mollitia minima minus. Vitae nesciunt quis assumenda id nulla quia laudantium.'
  },
]

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return(
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
            </SwiperSlide>
          )})
        }

      </Swiper>
    </section>
  )
}

export default Testimonial