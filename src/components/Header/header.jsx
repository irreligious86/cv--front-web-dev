import React from "react";
import './header.css';
import {gsap} from 'gsap';
import {HeaderPicture} from "./HeaderPicture/header-picture";
import {HeaderTitle} from "./HeaderTitle/header-title";
import {HeaderSubtitle} from "./HeaderSubtitle/header-subtitle";
import {HeaderLinks} from "./HeaderLinks/header-links";



gsap.from(".header-links-item", {
    opacity: 0,
    duration: .4,
    y: +600,
    stagger: 0.1,
    ease: "back.out"
});


export const Header = props => {
    return (
        <div className='header'>
            <HeaderPicture/>
            <HeaderTitle/>
            <HeaderSubtitle/>
            <HeaderLinks state={props.state}/>
        </div>
    )
}