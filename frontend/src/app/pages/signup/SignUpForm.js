import React, { useState } from 'react';
import {Link} from "react-router-dom";


const SignUpForm = ({ navigate }) => {
  // State variables to manage the email and password input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send a POST request to the '/users' endpoint with email and password data
    fetch('/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        email: email, 
        password: password, 
        username: username, 
        firstName: firstName, 
        lastName: lastName,
        signUpTimeAndDate: new Date().toLocaleString()
      })
    })
      .then(response => {
        // Check the response status code
        if (response.status === 201) {
          // If the status code is 201 (Created), navigate to the login page
          navigate('/login');
        } else {
          // If the status code is not 201, navigate back to the signup page
          navigate('/signup');
        }
      })
  }

  // Function to handle email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  // Function to handle password input change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }



  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <img src={require('../../../images/updated logo.png')} alt='logo' />
          {/* Email input */}
          <input placeholder="Email" id="email" type='text' value={email} onChange={handleEmailChange} />
          {/* Password input */}
          <input placeholder="Password" id="password" type='password' value={password} onChange={handlePasswordChange} />
          
          <input placeholder="Username" id="username" type='username' value={username} onChange={handleUsernameChange} />
          <input placeholder="First name" id="first-name" type='first-name' value={firstName} onChange={handleFirstNameChange} />
          <input placeholder="Last name" id="last-name" type='last-name' value={lastName} onChange={handleLastNameChange} />
          {/* Submit button */}
          <input id='submit' type="submit" value="Submit" />
        </form>
        </div>
      <div>
        <Link to="/login"> Login </Link>
      </div>
    </div>
  );
}

export default SignUpForm;
