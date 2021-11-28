import React from "react";
import './skills.css';

export const Skills = props => {
    return(
        <div className='skills'>
            <h3>Skills</h3>
            <p>{props.message}</p>
        </div>
    )
}