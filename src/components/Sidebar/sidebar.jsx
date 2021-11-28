import React from "react";
import './sidebar.css';
import {Contacts} from "./Contacts/contacts";
import {About} from "./About/about";
import {Languages} from "./Languages/languages";
import {Skills} from "./Skills/skills";

export const Sidebar = props => {
    return (
        <div className='sidebar'>
            <h2>Sidebar</h2>
            <Contacts/>
            <About/>
            <Languages/>
            <Skills/>
        </div>
    )
}