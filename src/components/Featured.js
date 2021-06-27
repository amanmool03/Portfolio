import React, { useEffect } from 'react'
import { featuredInfo, featuredWithSlug } from '../db/db'
import { Link } from 'react-router-dom';
import gsap from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';


export default function Featured() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.from('.work-card', {
            opacity: 0,
            clipPath: "inset(0% 0% 0% 100%)",
            duration: 0.8,
            scrollTrigger: {
                trigger: '.work-card',
                start: "top 40%"
            },

            stagger: {
                amount: '0.5'
            }

        })

    }, [])



    return (
        <div className='featured-section' data-scroll-section>
            <div className='wrapper'>
                <h2>
                    <span className='line'>Featured</span>
                    <span className='line'>Works</span>
                </h2>
                <div className='work'>
                    {Object.entries(featuredWithSlug).map(([slug, item]) => {
                        return (
                            <Link to={`/${slug}`} className='work-card'>
                                <div className='thumb'>
                                    <div className='img-wrapper'>
                                        <img src={item.imageUrl} alt="" />
                                    </div>
                                </div>
                                <div className='card-content'>
                                    <div className='title'>
                                        <h3>{item.title}</h3>
                                        <div className='arr'>
                                            <img id="thum" src="https://image.flaticon.com/icons/png/128/545/545682.png" alt="arrow" />
                                        </div>
                                    </div>
                                    <span className='project-info'>
                                        {item.info}
                                    </span>
                                </div>
                            </Link>
                        );
                    })}


                </div>
            </div>
        </div>
    )
}
