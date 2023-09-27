import React from 'react';
import './friends.css'
import AddFriend from '../addfriend/addfriend';

const Friends = ({token, setToken}) => {
  return (
    <div id="friends">
      <AddFriend token={token} setToken={setToken}/>
    </div>
  )
}

export default Friends;
