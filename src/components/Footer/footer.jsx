import React from "react";
import './footer.css';

export const Footer = props => {
    return(
        <div className='footer'>
            <h2>Footer</h2>
            <p>{props.message}</p>
        </div>
    )
}