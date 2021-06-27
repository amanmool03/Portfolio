import React, { useEffect } from 'react'

export default function CustomCursor() {


    const cursor = React.useRef(null);
    const cursor_inner = React.useRef(null);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            cursor.current.style.top = (e.pageY - window.scrollY) + 'px';
            cursor.current.style.left = e.pageX + 'px';
        })

        window.addEventListener("mousemove", (e) => {
            // cursor_inner.style.top = (e.clientY - scrollY) + 'px';
            // cursor_inner.style.left = e.clientX + 'px';

            cursor_inner.current.style.top = (e.pageY - window.scrollY) + 'px';
            cursor_inner.current.style.left = e.pageX + 'px';
        })
        document.addEventListener('mousedown', () => {
            cursor_inner.current.classList.add("click");
        })
        document.addEventListener('mouseup', () => {
            cursor_inner.current.classList.remove("click");
        })

    }, [])



    return (
        <div class="cursor" >
            <div class="cursor1" ref={cursor}></div>
            <div class="cursor-inner" ref={cursor_inner}></div>
        </div>
    )
}
