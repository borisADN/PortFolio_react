import React from 'react'
import './Testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'

// Pour la pagination https://swiperjs.com/react

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = {
  reviews: [
    {
   avatar: AVT1,
      name: "Ernest Achiever",  
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
    },
    {
      avatar: AVT2,
      name: "Ernest Achiever",  
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
    },
    {
     avatar: AVT3,
      name: "Ernest Achiever",  
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
    },
    {
      avatar: AVT4,
      name: "Ernest Achiever",  
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
    }
  ]
}

const Testimonials = () => {
  return (
    
    <section id='testimonials'>
    
      <h5>Retour De mes Clients</h5>
      <h2>Temoignages</h2>

      <Swiper
      modules={[Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
 
      pagination={{ clickable: true }}
      
      
      className="container testimonials__container">

      

        {data.reviews.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })}

        {/* <article className="testimonials">
          <div className="client__avatar">
            <img src={AVT1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi
          </small>
        </article>

        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVT2} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi
          </small>
        </article>

        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVT3} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">  
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi
          </small>
        </article> */}

      </Swiper>

    </section>
  )
}

export default Testimonials