import React, { useState } from 'react';

function AddFriend({token, setToken}) {
    const [friendEmail, setFriendEmail] = useState('');
    function addFriendByEmail() {
        fetch(`/users/addfriend`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
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
        .catch(error => console.error('Error adding friend:', error));
    }

    return (
        <div>
            <input 
                type="text" 
                value={friendEmail} 
                onChange={email=> setFriendEmail(email.target.value)} 
                placeholder="Enter friend's email"
            />
            <button onClick={addFriendByEmail}>Add Friend</button>
        </div>
    );
}

export default AddFriend;