import React from 'react'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';


// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './testimonials.css'


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia rerum maiores animi facilis dolorem, architecto dicta sequi totam qui magnam!',
  },
  {
    avatar: AVTR2,
    name: 'John Doe',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia rerum maiores animi facilis dolorem, architecto dicta sequi totam qui magnam!',
  },
  {
    avatar: AVTR3,
    name: 'Kwae Despite',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia rerum maiores animi facilis dolorem, architecto dicta sequi totam qui magnam!',
  },
  {
    avatar: AVTR4,
    name: 'Shu Nakamoto',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia rerum maiores animi facilis dolorem, architecto dicta sequi totam qui magnam!',  
  },
  
  ]

const testimonials = () => {
  return (
    <section className="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonial</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      slidesPerView={1}
      
     >
        {data.map(({avatar, name, review}, index) => {
          return(
            
        <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="name" />
          </div>
          <h5 className="client__name">{name}</h5>
          <small className="client__review">{review}</small>
        </SwiperSlide>
          )
        })}
      </Swiper>
      
    </section>
  )
}

export default testimonials