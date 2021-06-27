import React, { useEffect } from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import gsap from 'gsap'

export default function Navbar() {

    useEffect(() => {
        gsap.fromTo(".navbar__wrapper", {
            opacity: 0,
            y: -10
        }, { opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.inOut', y: 0 })
    }, [])


    return (
        <div className='navbar' data-scroll-section>
            <div className='navbar__wrapper' >

                <div className='logo'>
                    <Link to="/">   <img src={logo} alt="" /></Link>
                </div>

                <div className='nav'>
                    <ul>
                        <Link to="/playground" className='nav-links'><li>Playground</li ></Link>
                        <Link to="/about" className='nav-links'><li>About me</li ></Link>
                        <Link to="/connect" className='nav-links'><li>Connect</li ></Link>
                    </ul>
                </div>
            </div>

        </div>
    )
}
