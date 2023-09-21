import React from "react";
import {Link} from "react-router-dom";
import DropdownElement from '../dropdownElement/dropdownElement'
import './dropdown.css'

const dropdown = ({ navigate }) => { 



    const logout = () => {
        window.localStorage.removeItem("token")
        navigate('/login')
      }


    return (
        <div>
            <div className="main-container">
                <div className='menu-trigger'>
                    <img src={require('../../images/makerslogo.png')} alt='logo' />
                </div>
                <div className="dropdown-menu">
                    <ul>
                        <DropdownElement img = {require('../../images/user.png')} text={'My Profile'}/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default dropdown;