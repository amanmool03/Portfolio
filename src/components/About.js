import React, { useEffect } from 'react'
import gsap from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';

export default function About() {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.from(['#text', ".links", "#about-info"], {
            opacity: 0,
            clipPath: "inset(0% 0% 0% 100%)",
            ease: 'power3.inOut',
            duration: 0.8,
            scrollTrigger: {
                trigger: '.about-container',
                start: "top 40%"
            },

            stagger: {
                amount: '0.6'
            }

        })

    }, [])

    return (
        <div className='about-container' data-scroll-section>
            <div className='wrapper'>
                <div className='content'>
                    <h1 id="text">
                        <span className='line'>I develop</span>
                        <span className='line'>Websites</span>
                    </h1>
                    <ul className='links'>
                        <li><a href="">Email</a></li>
                        <li><a href="">Dribbble</a></li>
                        <li><a href="">LinkedIn</a></li>
                        <li><a href="">Facebook</a></li>


                    </ul>
                </div>
                <p id="about-info">Hello my name is aman and come with teh engfineering background and i am really
                    inspired to work for web.
                </p>
                <p id="about-info">Hello my name is aman and come with teh engfineering background and i am really
                    inspired to work for web.
                </p>
            </div>
        </div>
    )
}
