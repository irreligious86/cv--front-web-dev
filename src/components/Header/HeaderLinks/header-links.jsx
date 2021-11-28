import React from "react";
import './header-links.css';
import {HeaderLinksItem} from "./HeaderLinksItem/header-links-item";

export const HeaderLinks = props => {
    return (
        <div className='header-links'>
            {props.state.socialNetworks.map((item) => <HeaderLinksItem
                key={item.id}
                title={item.title}
                icon={item.icon}
                link={item.link}
            />)}
        </div>
    )
}