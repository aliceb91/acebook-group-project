import React, { useEffect, useState } from 'react';
import Post from '../post/Post'


const Feed = ({ navigate, logout, token , setToken}) => {

  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    if(token) {
      fetch("/posts", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(async data => {
          window.localStorage.setItem("token", data.token)
          setToken(window.localStorage.getItem("token"))
          setPosts(data.posts);
        })
    }
  }, [])

    return(
      <>
        <h2>Posts</h2>
          <button onClick={logout}>
            Logout
          </button>
        <div id='feed' role="feed">
            {posts.map(
              (post) => ( <Post token={token} setPosts = {setPosts} setToken={setToken} post={ post } key={ post._id } /> )
            )}
        </div>
      </>
    )
}

export default Feed;
