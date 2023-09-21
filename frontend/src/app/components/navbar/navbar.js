import React from 'react';
import {Link} from "react-router-dom";
import Dropdown from '../dropdown/dropdown';
import './navbar.css';



// const navbar = () => {
//   return (
//     <div className='navbar'>
//         <ul className='navbar-nav'>
//             <Link to="/home"><img src={require('../../images/makerslogo.png')} alt='logo' /></Link>
//         </ul>
//         <ul>
//             <Link to="/store">Store</Link>
//         </ul>
//         <ul>
//             <Link to="/mylibrary">My Library</Link>
//         </ul>
//         <ul>
//             <Link to="/squads">Squads</Link>
//         </ul>
//         <ul>
//             <Link to="/myprofile">My Profile</Link>
//         </ul>
//         <ul>
//             <Dropdown/>
//         </ul>
//     </div>
//   )
// }
// export default navbar;

const Navbar = (props) => {
    return (
        <nav className='navbar'> 
            <ul className='navbar-nav'> {props.children} </ul>
        </nav>
    );
}



export default Navbar;
