import React, { useState, useCallback, useEffect } from 'react';
import styles from './friends.module.css';
import AddFriend from '../addfriend/addfriend';
import TestFriendList from '../testfriendlist/TestFriendList';

const Friends = ({ token, setToken }) => {
    const [friends, setFriends] = useState([]);

    const fetchFriendsList = useCallback(async () => {
        try {
            const response = await fetch('/users/friends', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });

            const data = await response.json();
            console.log(data);

            if (data.token) {
                window.localStorage.setItem('token', data.token);
                setToken(data.token);
            }

            if (data.friends) {
                setFriends(data.friends);
            }

        } catch (error) {
            console.error('Error getting friends:', error);
        }
    }, [token, setToken]);

    useEffect(() => {
        fetchFriendsList();
    }, [token, fetchFriendsList]);

    return (
        <div id="friends" className={styles.friends}>
            <AddFriend token={token} setToken={setToken} onFriendAdded={fetchFriendsList} />
            <TestFriendList friends={friends} />
        </div>
    )
}

export default Friends;