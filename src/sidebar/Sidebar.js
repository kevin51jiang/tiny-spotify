import React, { Component } from 'react';
import { Router, Link } from '@reach/router';

import { BsThreeDots } from "react-icons/bs";
import { BsHouseDoor } from 'react-icons/bs';
import { IoIosAlbums } from 'react-icons/io'; //todo maybe convert to MdAlbum
import {AiOutlinePlusCircle } from 'react-icons/ai';
import SidebarList from './SidebarList';

import library from './Library';

import './Sidebar.css'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="sidebar boxed">
                {/* Three dots */}
                < button className="option-button boxed"> <BsThreeDots />  </button >

                {/* Static top */}
                <ul className="boxed">
                    <li><Link to={"/"}> <BsHouseDoor /> Home</Link></li>
                    <li><Link to={"browse"}> <IoIosAlbums /> Browse</Link></li>
                </ul>




                <div className="sidebar-scrollable boxed">
                    <SidebarList className="bold-children" path=":/" heading='Your Library' linkList={library.items} />
                    <SidebarList className="bold-text" path=":/" heading='Your Things' linkList={library.items} />
                    <SidebarList className="bold-text" path=":/" heading='Playlists' linkList={library.items} />
                </div>


                <div className="sidebar-footer boxed">
                    <button> <AiOutlinePlusCircle /> Create Playlist</button>
                </div>
            </div>
        );
    }
}

export default Sidebar;