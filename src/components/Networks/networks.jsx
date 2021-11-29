import React from "react";
import './networks.css';
import {NetworksItem} from "./NetworksItem/networks-item";

export const Networks = props => {
    return (
        <div className='header-links'>
            {props.state.socialNetworks.map((item) => <NetworksItem
                key={item.id}
                title={item.title}
                icon={item.icon}
                link={item.link}
            />)}
        </div>
    )
}