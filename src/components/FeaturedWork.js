import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { featuredSlugInfo, } from '../db/db';
import LocomotiveScroll from 'locomotive-scroll';
import UseLocoScroll from '../Hooks/UseLocoScroll';
import gsap from 'gsap/gsap-core';

export default function FeaturedWork() {

    useEffect(() => {
        gsap.fromTo("#thum", {
            clipPath: "inset(0% 0% 0% 100%)",


        }, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.3, ease: 'power3.inOut' }

        )

        gsap.from("#ftext", {
            opacity: 0,
            y: 10,
            delay: 1,
            ease: 'power3.inOut',
            stagger: {
                amount: "0.2"
            }
        })


    }, [])

    const { slug } = useParams();
    const work = featuredSlugInfo[slug];

    if (!work) {
        return <h2>Not Found</h2>

    }
    return (

        <div className='featuredWorkContainer' data-scroll-section>
            <div className="wrapper" >
                <div className='hero'>
                    <div className='hero-content'>
                        <h4 id="ftext">{work.info}</h4>
                        <h1 id="ftext">{work.title}</h1>
                        <div className='thumb'>
                            <div className='img-wrapper'>
                                <img src={work.imageUrl} alt="" id="thum" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="intro">
                    <p>{work.desc}</p>
                    <div className="project-info">
                        <div className="info">
                            <h5>website</h5>
                            <a href={work.webUrl}>{work.webUrl}</a>
                        </div>
                        <div className="info">
                            <h5>Project Date</h5>
                            <p>{work.projectDate}</p>
                        </div>
                    </div>
                </div>


                <div className="main-section">

                    <div className="section">
                        <div className="heading">
                            <h4>Objective</h4>
                        </div>
                        <div className='section-content'>
                            <p>{work.objective}</p>
                        </div>
                    </div>

                    <div className="section">
                        <div className="heading">
                            <h4>My Role</h4>
                        </div>
                        <div className='section-content'>
                            <p>{work.myRole}</p>
                        </div>
                    </div>

                    <div className="section">
                        <div className="heading">
                            <h4>Research and Planning</h4>
                        </div>
                        <div className='section-content'>
                            <p>{work.Research}</p>
                        </div>
                    </div>

                    <div className="section">
                        <div className="heading">
                            <h4>Work Flow</h4>
                        </div>
                        <div className='section-content'>
                            <p>{work.workFlow}</p>
                            <div className='thumb'>
                                <div className='img-wrapper'>
                                    <img src={work.workFlowImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
