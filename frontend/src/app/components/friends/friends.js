import React, { useState, useCallback, useEffect } from 'react';
import styles from './friends.module.css';
import AddFriend from '../addfriend/addfriend';
import TestFriendList from '../testfriendlist/TestFriendList';

const Friends = ({ token, setToken }) => {
    const [friends, setFriends] = useState([]);
    const [currentUser, setCurrentUser] = useState(window.sessionStorage.getItem("currentUser"))

    useEffect(() => {
        if(token) {
            fetch(`users/friends?currentUser=${currentUser}`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then(async (data) => {
                console.log(data)
                window.localStorage.setItem("token", data.token)
                setToken(window.localStorage.getItem("token"))
                setFriends(data.friends)
                console.log(data.friends)
            })
        }
    }, [currentUser, setToken, token])

    /*const fetchFriendsList = useCallback(async () => {
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
    }, [token, fetchFriendsList]);*/

    return (
        <div id="friendsArea" className={styles.friendsArea}>
            <AddFriend token={token} setToken={setToken} setFriends={setFriends} />
            {friends.map((friend) => {
                return <div>{friend}</div>
            })}
        </div>
    )
}

export default Friends;