import React from 'react';
import styles from './rightsidebar.module.css';
import SteamGamesList from '../steamgameslist/SteamGamesList'

const RightSideBar = () => {
    return (
        <div className={styles.rightSidebar}>
            <SteamGamesList />
            <p></p>
        </div>
    );
}

export default RightSideBar;