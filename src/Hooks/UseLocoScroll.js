
import LocomotiveScroll from 'locomotive-scroll';
import React, { useEffect } from 'react';

import 'locomotive-scroll/src/locomotive-scroll.scss'

export default function UseLocoScroll(start) {

    useEffect(() => {
        if (!start) return;

        const scrollEl = document.querySelector('#mainContainer');
        const scrollEl2 = document.querySelector('.featuredWorkContainer');


        const locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            class: 'is-reveal'
        });

    }, [start])


}
