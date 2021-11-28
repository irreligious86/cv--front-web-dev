import React from "react";
import './languages.css';

export const Languages = props => {
    return(
        <div className='languages'>
            <h3>Languages</h3>
            <p>{props.message}</p>
        </div>
    )
}