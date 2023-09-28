import React from 'react';
import styles from './rightsidebar.module.css';
import SteamNewsList from '../steamnewslist/SteamNewsList';

const RightSideBar = () => {
    return (
        <div id='right-sidebar' className={styles.rightSidebar}>
            <SteamNewsList />
            <p></p>
        </div>
    );
}

export default RightSideBar;