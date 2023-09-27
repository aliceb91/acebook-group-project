import React from 'react';
import './rightsidebar.css';
import SteamNewsList from '../steamgameslist/SteamGamesList'

const RightSideBar = () => {
    return (
        <div className="right-sidebar">
            <SteamNewsList />
            <p></p>
        </div>
    );
}

export default RightSideBar;