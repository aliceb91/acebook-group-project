import React from "react";
import { ReactComponent as SettingsIcon } from '../../../images/settings.svg';
import { ReactComponent as LogoutIcon } from '../../../images/logout.svg';
import { ReactComponent as PersonIcon } from '../../../images/person.svg';
import { ReactComponent as MessageIcon } from '../../../images/messages.svg';
import styles from './dropdown.module.css'
import { CSSTransition } from 'react-transition-group';


const Dropdown = ({ props, user }) => { 

    const [activeMenu, setActiveMenu] = React.useState('main');

    const DropdownItem = (props) => {
        return (
                <a href={props.target} className={styles.menuItem} onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                    <span className={styles.iconButton}>{props.leftIcon}</span>
                    {props.children}

                    <span className={styles.iconRight}>{props.rightIcon}</span>
                </a>
        );
    }

    const logout = () => {
        window.localStorage.removeItem("token")
        window.location.href ='/login'
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

                    <DropdownItem leftIcon={<PersonIcon />} rightIcon='My Profile' target="/profile" ></DropdownItem>
                    <DropdownItem leftIcon={<MessageIcon />} rightIcon='Messages' ></DropdownItem>
                    <DropdownItem leftIcon={<SettingsIcon />} rightIcon='Settings' goToMenu="test"></DropdownItem>
                    <DropdownItem leftIcon={<LogoutIcon />} rightIcon='Logout'></DropdownItem>
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