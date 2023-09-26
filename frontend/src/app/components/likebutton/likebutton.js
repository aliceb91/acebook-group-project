import React, { useState, useEffect } from "react";

const LikeButton = ({ post, token, setToken }) => {
    const [likes, setLikes] = useState(post.likes);
    const [liked, setLiked] = useState(false);


    const handleLike = async (event) => {
        event.preventDefault();

        if (token && !liked) {
            fetch("/posts/" + post._id + "/like", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => {
                    // Check the response status code
                    if (response.status === 201) {
                        console.log("Post liked successfully");
                    } else {
                        console.log("Post not liked");
                    }
                    return response.json(); // Parse the response as JSON
                })
                .then(async (data) => {
                    window.localStorage.setItem("token", data.token);
                    setToken(data.token); // Update the token using setToken
                    setLikes(data.likes);
                    setLiked(true);
                })
                .catch((error) => {
                    console.error("Error submitting post:", error);
                });
        } else if (token && liked) {
            fetch("/posts/" + post._id + "/unlike", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => {
                    // Check the response status code
                    if (response.status === 201) {
                        console.log("Post unliked successfully");
                    } else {
                        console.log("Post not unliked");
                    }
                    return response.json(); // Parse the response as JSON
                })
                .then(async (data) => {
                    window.localStorage.setItem("token", data.token);
                    setToken(data.token); // Update the token using setToken
                    setLikes(data.likes);
                    setLiked(false);
                })
                .catch((error) => {
                    console.error("Error submitting post:", error);
                });
            }
    }

    return (
        <div className="like-container">
            <button onClick={handleLike}>
                {liked ? "Unlike" : "Like"} ({likes})
            </button>
        </div>
    );
}

export default LikeButton;