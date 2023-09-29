import React, { useEffect } from 'react';
import styles from './profilePic.module.css';

const ProfilePic = ({ user }) => { 

    return (
        <div className={styles.profilePiccontainer}>
            <img className={styles.profilePic} src={user.profilePic} alt="profile" />
        </div>
    )
}

export default ProfilePic;