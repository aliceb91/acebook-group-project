import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './navbar.css';


const NavbarItem = (props) => {

    const [open, setOpen] = useState(false);

    return (
        <li className='nav-item'>
            <a href="#" className='icon-button' onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            
            {open && props.children}
        </li>
    );
}

export default NavbarItem;