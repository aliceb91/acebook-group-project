import React, { useState } from 'react';
import {Link} from "react-router-dom";
import styles from './navbar.module.css';


const NavbarItem = (props) => {

    const [open, setOpen] = useState(false);

    return (
        <li className={styles.navItem}>
            <a href="#" className={styles.iconButton} onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            
            {open && props.children}
        </li>
    );
}

export default NavbarItem;