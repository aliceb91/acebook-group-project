import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './navbar.css';


const NavbarItem = (props) => {

    const [open, setOpen] = useState(false);

    return (
        <li className='nav-item'>
            <Link to={props.link} className='icon-button'>{props.icon} onClick={() => setOpen(!open)}</Link>
            
            {open && props.children}
        </li>
    );
}

export default NavbarItem;