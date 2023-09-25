import React from 'react';
import {Link} from "react-router-dom";
import './navbar.css';
import { ReactComponent as PlusIcon } from '../../../images/plus.svg';
import Dropdown from '../dropdown/dropdown';
import NavbarItem from '../navbar/navbarItem.js';


const Navbar = (props) => {
    return (
        <nav className='navbar'> 
        <div className='page-links'>
            <ul>
                <Link to="/home"><img id="logo" src={require('../../../images/gamebook.png')} alt='logo' /></Link>
            </ul>
            <div className='page-links-single'>
            <ul>
                <Link to="/store">Store</Link>
            </ul>
            </div>
            <div className='page-links-single'>
            <ul>
                <Link to="/mylibrary">My Library</Link>
            </ul> 
            </div>
            <div className='page-links-single'>
            <ul>
                <Link to="/squads">Squads</Link>       
            </ul>
            </div>
            
            <ul className='navbar-nav'> 
                <NavbarItem icon= {<PlusIcon />} >
                    <Dropdown logout={props.logout}/>
                </NavbarItem>
            </ul>
        </div>
            
        </nav>
    );
}



export default Navbar;
