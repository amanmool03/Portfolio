import gsap from 'gsap/gsap-core'
import React, { useEffect } from 'react'
import { floatingIcons } from '../db/db'

export default function Header() {


    useEffect(() => {
        gsap.fromTo(["#hero-text", ".line"], {
            opacity: 0,
            y: 10
        },
            {
                opacity: 1,
                duration: 1,
                y: 0,
                delay: 0.1,
                ease: 'power3.inOut',
                stagger: {
                    amount: 0.95
                }
            }
        )

        gsap.fromTo(["#ballon"], {
            opacity: 0,

        },
            {
                opacity: 1,
                duration: 1,
                delay: 0.1,
                ease: 'power3.inOut',
                stagger: {
                    amount: 0.95
                }
            }
        )


    }, [])


    return (
        <div className='hero header-container' >
            <div className='wrapper'>
                <div className='hero-content'>
                    <h4 id="hero-text"> <span>Aman Mool</span></h4>
                    <h1>
                        <span className='line'>- UX-UI designer</span>
                        <span className='line'>& Web Developer</span>
                    </h1>
                </div>

                <div className='floating-item'>

                    {floatingIcons.map((item, index) => {
                        return (
                            <a href={item.socialLink} target='_blank' className={item.title} id="ballon">
                                <div className='item-span'>
                                    <img src={item.imageUrl} alt={item.title} />
                                </div>
                            </a>
                        );
                    })}

                </div>
            </div>
        </div>
    )
}
