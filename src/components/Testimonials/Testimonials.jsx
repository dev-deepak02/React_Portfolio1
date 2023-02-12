import React from "react";
import "./Testimonials.css";
import AVTR1 from '../../assets/g1.jpg';
import AVTR2 from "../../assets/g3.jpg"
import AVTR3 from "../../assets/b1.jpg";
import AVTR4 from "../../assets/Rahul.jpg";
import AVTR5 from "../../assets/Raushan.jpeg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import "swiper/modules/pagination/pagination.min.css";

const data = [
  {
    avatar: AVTR1,
    name: "Roshni",
    review:
      "The quality of Deepak work was exceptional, with attention to detail and a keen eye for design that made my website look amazing.",
  },
  {
    avatar: AVTR2,
    name: "Teena Rathore",
    review:
      "I had the pleasure of working with Deepak for my web development project and I couldn't be happier with the experience.",
  },
  {
    avatar: AVTR3,
    name: "Jonny Sen",
    review:
      "I appreciate Deepak's attention to detail and their commitment to delivering a high-quality product.",
  },
  {
    avatar: AVTR4,
    name: "Rahul Yadav",
    review:
      "I recently worked with Deepak on a web development project, and I am so happy to work with Deepak.",
  },
  {
    avatar: AVTR5,
    name: "Raushan Kumar",
    review:
      "Overall, I would highly recommend Deepak to anyone looking for a reliable and skilled web development partner.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reeview from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <div className="container testimonials_container">
          {data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide>
                <div className="testimonial" key={index}>
                  <div className="clients_avtar">
                    <img src={avatar} alt="" />
                  </div>
                  <h5 className="client_name">{name}</h5>
                  <small className="client_review">{review}</small>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </section>
  );
};

export default Testimonials;

// 2.37mm
