import React from "react";
import {Link} from "react-router-dom";
import DropdownElement from '../dropdownElement/dropdownElement'
import './dropdown.css'
import { CSSTransition } from 'react-transition-group';

const Dropdown = ({ props }) => { 

    const [activeMenu, setActiveMenu] = React.useState('main');

    const DropdownItem = (props) => {
        return (
                <a href="#" className='menu-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                    <span className='icon-button'>{props.leftIcon}</span>
                    {props.children}

                    <span className='icon-right'>{props.rightIcon}</span>
                </a>
        );
    }

    return (
        <div className='dropdown'> 
            <CSSTransition
                in={activeMenu === 'main'} 
                unmountOnExit
                timeout={500}
                classNames="menu-primary"
            >
                <div className='menu'>

                    <DropdownItem leftIcon='🏠' rightIcon='Home' ></DropdownItem>
                    <DropdownItem leftIcon=':)' rightIcon='Settings' goToMenu="test"></DropdownItem>
                    <DropdownItem leftIcon=':)' rightIcon='Logout'></DropdownItem>
                </div>
            </CSSTransition>
            <CSSTransition
                in={activeMenu === 'test'} 
                unmountOnExit
                timeout={500}
                classNames="menu-secondary"
            >
                <div className='menu'>

                    <DropdownItem rightIcon='Back' goToMenu='main'></DropdownItem>
                    <DropdownItem leftIcon=':)' rightIcon='Stuff'></DropdownItem>
                </div>
            </CSSTransition>
        </div>

    )
}

export default Dropdown;