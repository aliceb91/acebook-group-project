import React, { useEffect } from 'react';
import LikeButton from '../likebutton/likebutton';
import Comment from '../comment/comment';
import styles from './Post.module.css'

const Post = ({post, token, setToken, setPosts, comments}) => {

  const handleDeletePost = async (event) => {
    event.preventDefault();

    if (token) {
      fetch('/posts/' + post._id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
        
      })
      .then(response => {
        // Check the response status code
        if (response.status === 201) {
          console.log("Post deleted successfully");
        } else {
          console.log("Post not deleted");
        }
        return response.json(); // Parse the response as JSON
      })
      .then(async data => {
        window.localStorage.setItem("token", data.token);
        setToken(data.token); // Update the token using setToken
      })
      .then(() => { 
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
      }})
      .catch(error => {
        console.error("Error submitting post:", error);
      });
    }
  
  };

  return(
    <div id='post-container' className={styles.postContainer}>
      <div>{post.message}</div>
      <div id='control-area' className={styles.controlArea}>
        <div>{post.postTimeAndDate}</div>
        <div id='post-buttons' className={styles.buttons}>
          <LikeButton post={post} token={token} setToken={setToken}/>
          <button id='delete-submit' className={styles.deleteSubmit}><span onClick={handleDeletePost}> Delete</span></button>
        </div>
      </div>
      <div>
        <Comment post={post} token={token} setToken={setToken} setPosts={setPosts}/>
          {comments.map(
            (comment) => <div className={styles.commentBody}>{comment}</div>
          )}
      </div>
    </div>
  )
}

export default Post;