import React from 'react';

const ProfilePic = ({ user }) => { 
    return (
        <div>
            <img src={user.profilePic} alt="profile picture" />
        </div>
    )
}