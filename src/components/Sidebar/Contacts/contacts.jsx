import React from "react";
import './contacts.css';

export const Contacts = props => {
    return(
        <div className='contacts'>
            <h3>Contacts</h3>
            <p>{props.message}</p>
        </div>
    )
}