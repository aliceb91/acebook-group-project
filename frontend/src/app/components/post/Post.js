import React, { useEffect } from 'react';
import LikeButton from '../likebutton/likebutton';
import Comment from '../comment/comment';

const Post = ({post, token, setToken, setPosts}) => {

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
    <div className='post-container'>
    <article data-cy="post" key={ post._id }>{ post.message } <p>{ post.postTimeAndDate }</p></article>
    <button><span onClick={handleDeletePost}> Delete</span></button>
    <LikeButton post={post} token={token} setToken={setToken}/>
    <Comment post={post} token={token} setToken={setToken}/>
    </div>
  )
}

export default Post;