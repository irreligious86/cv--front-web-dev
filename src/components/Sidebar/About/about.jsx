import React from "react";
import './about.css';

export const About = props => {
    return(
        <div className='about'>
            <h3>About</h3>
            <p>{props.message}</p>
        </div>
    )
}