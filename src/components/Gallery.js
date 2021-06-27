import React, { useEffect, useState } from 'react'
import { GalleryItems } from '../db/db'
import Title from './gallery/Title';
import Media from './gallery/Media';
import UseMousePosition from '../Hooks/UseMousePosition';
import gsap from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';


const useMousePosition = () => {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = e => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', updateMousePosition);

        return () => window.removeEventListener('mousemove', updateMousePosition)
    }, [])

    return mousePosition;


}



export default function Gallery() {


    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.from(['.project-items'], {
            opacity: 0,
            clipPath: "inset(0% 0% 0% 100%)",
            ease: 'power3.inOut',
            duration: 0.8,
            scrollTrigger: {
                trigger: '.gallery-container',
                start: "top 60%"
            },

            stagger: {
                amount: '0.6'
            }

        })

    }, [])




    const [activeIndex, setActiveIndex] = useState(-1);

    const { x, y } = useMousePosition();

    console.log(x, y)

    return (
        <div className='gallery-container' data-scroll-section>
            <div className='wrapper'>
                <div className='content'>
                    <h2>
                        <span className='line'>More</span>
                        <span className='line'>Works</span>
                    </h2>
                    <div className='works'>
                        <p className='works-desc'>More of my design and development work on platforms like dribbble, behance and codepen.</p>
                        {GalleryItems.map(({ title, desc }, index) => {
                            return (
                                <Title title={title} desc={desc} setActiveIndex={setActiveIndex} index={index} />
                            );
                        })}

                        <div className="project-media">
                            {GalleryItems.map(({ imageUrl }, index) => {
                                const isActive = index === activeIndex;
                                const xPos = isActive ? x : 0;
                                const yPos = isActive ? y : 0;
                                return (
                                    <Media url={imageUrl} active={isActive} x={xPos} y={yPos} />
                                );
                            })}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
