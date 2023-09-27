
import React, { useEffect, useState } from 'react';

function GetFriends({ token, setToken }) {
    const [friends, setFriends] = useState([]);

    const getFriendsList = async () => {
        try {
            const response = await fetch('users/friends', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
            const data = await response.json();
            console.log(data);
            setFriends(data.friends);
            if (data.token) {
                window.localStorage.setItem('token', data.token);
                setToken(data.token);
            }
        } catch (error) {
            console.error('Error getting friends:', error);
        }
    }

    useEffect(() => {
        getFriendsList();
    }, [token, setToken]); 

    return (
        <div className="friend-list">
            <h2>People You Follow</h2>
            {friends.map(friend => (
                <h3 key={friend}>{friend}</h3>
            ))}
        </div>
    );
}

export default GetFriends;

