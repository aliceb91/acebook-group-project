import React, { useEffect } from 'react';
import LikeButton from '../likebutton/likebutton';
import Comment from '../comment/comment';
import styles from './Post.module.css'

const Post = ({post, token, setToken, setPosts, comments, feedVar}) => {

  let target = ""

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
        fetch(`/posts?creator=${feedVar}`, {
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

  const handleDeleteComment = async (event) => {
    event.preventDefault();

    const newCommentArr = comments.filter((comments) => {
     return comments.id !== target 
    })

    if(token) {
      fetch('posts/' + post._id, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          comments: newCommentArr
        })
      })
      .then((response) => {
        // Check the response status code
      if (response.status === 200) {
        console.log("Comment deleted successfully");
      } else {
        console.log("Comment not deleted");
      }
      return response.json(); // Parse the response as JSON
      })
      .then(() => { 
        if(token) {
        fetch(`/posts?creator=${feedVar}`, {
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
  }

  return(
    <div id='post-container' className={styles.postContainer}>
      <div>{post.creator}</div>
      <div>{post.message}</div>
      <div id='control-area' className={styles.controlArea}>
        <div>Posted: {post.postTimeAndDate} | Likes: {post.likes}</div>
        <div id='post-buttons' className={styles.buttons}>
          {post.creator === window.sessionStorage.getItem("currentUser") && 
            <button id='delete-submit' className={styles.deleteSubmit}><span onClick={handleDeletePost}> Delete</span></button>
          }
          <LikeButton post={post} token={token} setToken={setToken}/>
        </div>
      </div>
      <div>
        <Comment post={post} token={token} setToken={setToken} setPosts={setPosts} feedVar={feedVar}/>
          {comments.map(
            (comment) => {
              target = comment.id
              return (
                <div className={styles.commentArea}>
                  <div className={styles.commentBody}>
                    <div>{comment.creator}</div>
                    <div>{comment.comment}</div>
                  </div>
                  <div className={styles.controlBar}>
                    <div> Commented: {comment.commentTimeAndDate}  |  Likes: TBC</div>
                    <div className={styles.commentControl}>
                      {comment.creator === window.sessionStorage.getItem("currentUser") && 
                        <button id='delete-submit' className={styles.deleteSubmit}><span onClick={handleDeleteComment}> Delete</span></button>
                      }
                      <LikeButton post={post} token={token} setToken={setToken}/>
                    </div>
                  </div>
                </div>
          )}
          )}
      </div>
    </div>
  )
}

export default Post;