import React, { useState, useEffect } from "react";

const Comment = ({ token, setToken, post}) => {

    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");

   

    useEffect(() => {
        if(token) {
          fetch(`/posts/${post._id}/comment`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
            .then(response => response.json())
            .then(async data => {
              window.localStorage.setItem("token", data.token)
              setToken(window.localStorage.getItem("token"))
              setComments(data.post.comments);
            })
        }
      }, [])

    

    const commentList = comments.map((comment) => {
        return (
            <div className="comment-list">
                <p>{comment}</p>
            </div>
        );
    });

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
                .catch((error) => {
                    console.error("Error submitting post:", error);
                });
        }
        setComment("");
    }
    
    return (
        <div className="comment-container">
            {commentList}
            <input
                type="text"
                placeholder="Add a comment"
                value={comment}
                onChange={(event) => setComment(event.target.value)}></input>
            <button onClick={handleAddComment}>Add Comment</button>
        </div>
    );
    }

    export default Comment;