import React from 'react'

export default function Title({ title, desc, setActiveIndex, index }) {
    console.log(setActiveIndex)
    return (
        <div className='title-wrapper'
            onMouseEnter={() => {
                return (setActiveIndex(index));
            }}
            onMouseLeave={() => {
                return (setActiveIndex(-1));
            }}
        >
            <a href="#">
                <div className='project-items'>
                    <div className="list-content">
                        <h3 className="project-title">{title}</h3>
                        <img src="https://image.flaticon.com/icons/png/512/545/545682.png" alt="" />
                    </div>
                    <p>{desc}</p>
                </div>

            </a>

        </div>
    )
}
