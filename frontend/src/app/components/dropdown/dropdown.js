import React from "react";
import {Link} from "react-router-dom";
import DropdownElement from '../dropdownElement/dropdownElement'
import styles from './dropdown.module.css'
import { CSSTransition } from 'react-transition-group';

const Dropdown = ({ props }) => { 

    const [activeMenu, setActiveMenu] = React.useState('main');

    const DropdownItem = (props) => {
        return (
                <a href="#" className={styles.menuItem} onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                    <span className={styles.iconButton}>{props.leftIcon}</span>
                    {props.children}

                    <span className={styles.iconRight}>{props.rightIcon}</span>
                </a>
        );
    }

    return (
        <div id='dropdown' className={styles.dropdown}> 
            <CSSTransition
                in={activeMenu === 'main'} 
                unmountOnExit
                timeout={500}
                classNames={styles.menuPrimary}
            >
                <div id='dropdown-menu' className={styles.menu}>

                    <DropdownItem leftIcon='🏠' rightIcon='Home' ></DropdownItem>
                    <DropdownItem leftIcon=':)' rightIcon='Settings' goToMenu="test"></DropdownItem>
                    <DropdownItem leftIcon=':)' rightIcon='Logout'></DropdownItem>
                </div>
            </CSSTransition>
            <CSSTransition
                in={activeMenu === 'test'} 
                unmountOnExit
                timeout={500}
                classNames={styles.menuSecondary}
            >
                <div id='dropdown-menu2' className={styles.menu}>

                    <DropdownItem rightIcon='Back' goToMenu='main'></DropdownItem>
                    <DropdownItem leftIcon=':)' rightIcon='Stuff'></DropdownItem>
                </div>
            </CSSTransition>
        </div>

    )
}

export default Dropdown;