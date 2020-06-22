import React from 'react';
import  { Subheading }  from "./Subheading";
import Dest from "./Dest";

import './SidebarList.css';

const SidebarList = (props) => {
    return (
        <div className="sidebar-list">
            {/* PLAYLISTS header*/}
            <Subheading heading={props.heading} />

            {/* The actual list of playlists */}
            <ul>
                {props.linkList.map((link) => (
                    <li key={link.id}>
                        <Dest dest={link} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SidebarList;