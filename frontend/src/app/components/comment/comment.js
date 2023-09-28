import React, { useState, useEffect } from "react";
import styles from './comment.module.css'

const Comment = ({ token, setToken, post, setPosts, feedVar}) => {

    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");

    const handleAddComment = async (event) => {
        event.preventDefault();

        if (token) {
            fetch("/posts/" + post._id + "/comment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    creator: window.sessionStorage.getItem('currentUser'),
                    comment: comment,
                }),
            })
                .then((response) => {
                    // Check the response status code
                    if (response.status === 201) {
                        console.log("Comment added successfully");
                    } else {
                        console.log("Comment not added");
                    }
                    return response.json(); // Parse the response as JSON
                })
                .then(async (data) => {
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
                .catch((error) => {
                    console.error("Error submitting post:", error);
                });
        }
        setComment("");
    }
    
    return (
        <div id='comments-area' className={styles.commentsArea}>
            <input
                className={styles.inputBox}
                type="text"
                placeholder="Add a comment"
                value={comment}
                onChange={(event) => setComment(event.target.value)}></input>
            <button id='comment-submit' className={styles.commentSubmit} onClick={handleAddComment}>Add Comment</button>
        </div>
    );
    }

    export default Comment;