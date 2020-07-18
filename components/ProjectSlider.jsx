// import { Swiper, SwiperSlide } from 'swiper/react';

import React, { useState } from "react"
import Swiper from "react-id-swiper"

const projects = [
    { title: "KC HALL", subtitle: "Business Website", imgUrl: "/images/wedding.jpg" },
    { title: "Recipax", subtitle: "Web Application", imgUrl: "/images/strawberry.jpg" },
    { title: "Your next project?", subtitle: "Freelance Work", imgUrl: "/images/sparkler.jpeg" },
]

const ProjectCard = ({ title, subtitle, imgUrl }) => (
    <div className="project-card" style={{ background: `url(${imgUrl})` }}>
        <div className="project-card__container">
            <div className="line-break" />
            <div className="project-card__subtitle">
                {subtitle}
            </div>
            <div className="project-card__title">
                {title}
            </div>
        </div>
    </div>
)

export const ProjectSlider = props => {

    const params = {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            1441: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1440: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    }

    //   const goNext = () => {
    //     if (swiper !== null) {
    //       swiper.slideNext()
    //     }
    //   }

    //   const goPrev = () => {
    //     if (swiper !== null) {
    //       swiper.slidePrev()
    //     }
    //   }

    return (
        <div>
            <Swiper {...params}>
                {projects.map(({ title, subtitle, imgUrl }) =>
                    <div className="project-card" style={{ background: `url(${imgUrl})` }}>
                        <div className="project-card__container">
                            <div className="line-break" />
                            <div className="project-card__subtitle">
                                {subtitle}
                            </div>
                            <div className="project-card__title">
                                {title}
                            </div>
                        </div>
                    </div>)
                }

            </Swiper>
            {/* <button onClick={goPrev}>Prev</button>
      <button onClick={goNext}>Next</button> */}
        </div>
    )
}