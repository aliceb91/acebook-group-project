import React from "react";
import Navbar from "../navbar/navbar";
import NavbarItem from "../navbar/navbarItem.js";
import DropdownElement from '../dropdownElement/dropdownElement'
import { ReactComponent as PlusIcon } from '../../images/plus.svg';
import IconMenu from "../dropdown/MuiDropdown.js";

const Home = () => {
  return (
    <html>
    <Navbar>
        <NavbarItem icon='🏠' link='/home'/>
        <NavbarItem icon= {<PlusIcon />} link='/signup'>
            <p>Sign Up</p>
        </NavbarItem>
    </Navbar>
    <h1>Test home</h1>
    <IconMenu />
    </html>
  )
}

export default Home;