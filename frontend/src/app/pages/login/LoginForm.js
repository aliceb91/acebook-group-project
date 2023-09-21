import React, { useState } from 'react';

const LogInForm = ({ navigate, email, setEmail }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch( '/tokens', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password })
    })

    if(response.status !== 201) {
      console.log("yay")
      navigate('/login')
    } else {
      console.log("oop")
      let data = await response.json()
      window.localStorage.setItem("token", data.token)
      navigate('/home');
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }


    return (
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <input placeholder='Email' id="email" type='text' value={ email } onChange={handleEmailChange} />
            <input placeholder='Password' id="password" type='password' value={ password } onChange={handlePasswordChange} />
            <input role='submit-button' id='submit' type="submit" value="Submit" />
          </form>
        </div>
        <div>
          <p>Don't have an account? <a href='/signup'>Sign up</a></p>
          <p>Forgotten password? <a href='/reset'>Reset Password</a></p>
        </div>
      </div>
    );
}

export default LogInForm;
