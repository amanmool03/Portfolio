import React, { useEffect } from 'react'


export default function Footer() {

    return (
        <div className='footer-container' data-scroll-section>
            <div className='wrapper'>
                <div className='content' id="footer-content">
                    <h1>
                        <span className='line'>Let's work</span>
                        <span className='line'>together</span>
                    </h1>
                    <a href='' target='_blank' className='email'>
                        <div className='item-span'>
                            <img src='https://image.flaticon.com/icons/png/512/732/732200.png' />
                        </div>
                    </a>
                </div>



                <div className='foot'>
                    <p>Portfolio 2021</p>
                    <p>Designed and Developed by Aman mool</p>
                </div>
            </div>
        </div>
    )
}
