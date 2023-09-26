import React, { useState } from 'react';
import styles from './submit.module.css'

const Submit = ({ token, setToken, setPosts}) => {
  const [message, setMessage] = useState("");

  const submitPost = async (event) => {
    event.preventDefault();

    if (token) {
      fetch('/posts', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ 
          message: message, 
          postTimeAndDate: new Date().toLocaleString()
        })
      })
      .then(response => {
        // Check the response status code
        if (response.status === 201) {
          console.log("Post submitted successfully");
        } else {
          console.log("Post not submitted");
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

    

    setMessage("");
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  }

  return (
    <div className={styles.mainContainer}>
      <form className={styles.submitPostContainer} onSubmit={submitPost}>
        <input className={styles.inputBox} type="text"
          placeholder="What's on your mind?" 
          value={message} 
          onChange={handleMessageChange}
        />
       <input id='feedSubmit' className={styles.feedSubmit} type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Submit;
