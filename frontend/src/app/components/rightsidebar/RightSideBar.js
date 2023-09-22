
import React from 'react';
import './rightsidebar.css';
import SteamGamesList from '../steamgameslist/SteamGamesList'

const RightSideBar = () => {
    return (
        <div className="right-sidebar">
            <SteamGamesList />
            <p>List to go here.</p>
        </div>
    );
}

export default RightSideBar;