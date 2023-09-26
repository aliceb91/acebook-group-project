import React, { useState } from 'react';
import './submit.css'

const Submit = ({ token, setToken }) => {
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
    <div className='main-container'>
      <form className='submit-post-container' onSubmit={submitPost}>
        <input className='input-box' type="text"
          placeholder="What's on your mind?" 
          value={message} 
          onChange={handleMessageChange}
        />
       <input id='feedSubmit' type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Submit;
