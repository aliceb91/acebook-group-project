import React, { useEffect, useState } from 'react';
import Post from '../post/Post'
import styles from './Feed.module.css'


const Feed = ({ navigate, logout, token , setToken, posts, setPosts}) => {
  
  useEffect(() => {
    if(token) {
      fetch("/posts?creator=all", {
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
      <div id='whole-feed' className={styles.wholeFeed}>
        <h2>Feed:</h2>
        <div role="feed">
            {posts.map(
              (post) => ( <Post token={token} setPosts = {setPosts} setToken={setToken} post={ post } key={ post._id } comments={post.comments} feedVar={"all"}/> )
            )}
        </div>
      </div>
    )
}

export default Feed;
