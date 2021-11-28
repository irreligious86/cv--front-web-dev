import React from "react";
import './header-subtitle.css';
import { gsap } from "gsap";



export const HeaderSubtitle = props => {
    // const subtitleText = document.querySelector('.header-subtitle-inner');
    //
    // const splitText = (el) => {
    //     el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
    //         return <div class="word"> +
    //             m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") +
    //         </div>;
    //     });
    //     return el;
    // };
    //
    // const split = splitText(subtitleText);
    //
    // const random = (min, max) => {
    //     return (Math.random() * (max - min)) + min;
    // }
    //
    // Array.from(split.querySelectorAll('.letter')).forEach((el, idx) => {
    //     gsap.from(el, 2.5, {
    //         opacity: 0,
    //         scale: .1,
    //         x: random(-500, 500),
    //         y: random(-500, 500),
    //         z: random(-500, 500),
    //         delay: idx * 0.02,
    //         repeat: 1,
    //     })
    // });
    return(
        <div className='header-subtitle'>
            <h2 className='header-subtitle-inner'>Frontend Web-developer</h2>
        </div>
    )
}