import React from 'react';
import {Link} from "react-router-dom";
import styles from './navbar.module.css';
import { ReactComponent as PlusIcon } from '../../../images/plus.svg';
import Dropdown from '../dropdown/dropdown';
import NavbarItem from '../navbar/navbarItem.js';


const Navbar = (props, logout) => {
    return (
        <nav id='navbar' className={styles.navbar}> 
        <div className={styles.pageLinks}>
            <ul className={styles.listItem}>
                <Link to="/home"><img className={styles.logo} src={require('../../../images/gamebook.png')} alt='logo' /></Link>
            </ul>
            <div className={styles.pageLinksSingle}>
                <ul className={styles.listItem}>
                    <a className={styles.listItem} href="/store">Store</a>
                </ul>
            </div>
            <div className={styles.pageLinksSingle}>
                <ul className={styles.listItem}>
                    <a className={styles.listItem} href="/mylibrary">My Library</a>
                </ul> 
            </div>
            <div className={styles.pageLinksSingle}>
                <ul className={styles.listItem}>
                    <a className={styles.listItem} href="/gallery">Squads</a>       
                </ul>
            </div>
            
            <ul className={styles.navbarNav}> 
                <NavbarItem icon= {<PlusIcon />} >
                    <Dropdown logout={logout} user={props.user}/>
                </NavbarItem>
            </ul>
        </div>
            
        </nav>
    );
}



export default Navbar;
