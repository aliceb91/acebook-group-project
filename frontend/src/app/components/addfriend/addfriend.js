import React, { useState } from 'react';
import styles from './addfriend.module.css';

function AddFriend({token, setToken, setFriends }) {
    const [friendEmail, setFriendEmail] = useState('');

    /*function addFriendByEmail() {
        if (friendEmail === window.sessionStorage.getItem("email")){
            console.log("You can't add yourself!")
            return
        }
        fetch(`/users/addfriend`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                email: window.sessionStorage.getItem("email"),
                friendEmail: friendEmail 
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setFriendEmail('');
            window.localStorage.setItem('token', data.token);
            setToken(data.token);
        })
        .then(() => {
            fetch("users/friends", {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        })
        .catch(error => console.error('Error adding friend:', error));
    }*/

    const addFriendByEmail = () => {
        if (token) {
            fetch(`/users/addfriend?currentUser=${window.sessionStorage.getItem("currentUser")}`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({friendEmail: friendEmail})
            })
            .then(response => {
                if (response.status === 200) {
                    console.log("Friends added successfully!")
                } else {
                    console.log("Uh oh!")
                }
                return response.json();
            })
            .then(() => {
                if(token) {
                    fetch(`/users/friends?currentUser=${window.sessionStorage.getItem("currentUser")}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    .then(response => response.json())
                    .then(async data => {
                        window.localStorage.setItem("token", data.token)
                        setToken(window.localStorage.getItem("token"))
                        setFriends(data.friends)
                    })
                }
            })
        }
    }

    const handleEmailChange = (event) => {
        setFriendEmail(event.target.value)
    }

    return (
        <div className={styles.addFriendArea}>
            <input 
                className={styles.addFriendBar}
                type="text" 
                value={friendEmail} 
                onChange={handleEmailChange} 
                placeholder="Enter friend's email"
            />
            <button className= {styles.addFriendButton} onClick={addFriendByEmail}>Add Friend</button>
        </div>
    );
}

export default AddFriend;