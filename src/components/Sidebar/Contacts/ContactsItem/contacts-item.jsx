import React from "react";
import './contacts-item.css';

export const ContactsItem = props => {
    return(
        <div className='contacts-item'>
            <h2>ContactsItem</h2>
            <p>{props.message}</p>
        </div>
    )
}