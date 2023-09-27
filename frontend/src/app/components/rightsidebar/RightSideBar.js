import React from 'react';
import styles from './rightsidebar.module.css';
import SteamGamesList from '../steamgameslist/SteamGamesList'

const RightSideBar = () => {
    return (
        <div id='right-sidebar' className={styles.rightSidebar}>
            <SteamGamesList />
            <p></p>
        </div>
    );
}

export default RightSideBar;