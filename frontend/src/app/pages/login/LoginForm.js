import React, { useState, useEffect } from 'react';
import styles from "./LoginForm.module.css";

const LogInForm = ({ navigate, setSessionUser, sessionUser}) => {
  const [email, setEmail] = useState("");
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
      navigate('/login')
    } else {
      let data = await response.json()
      window.localStorage.setItem("token", data.token)
      window.sessionStorage.setItem("sessionUser", email)
      window.sessionStorage.setItem("currentUser", data.username)
      console.log(data.username)
      navigate('/home')
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }


    return (
      <div id='login-full-page' className={styles.fullPage}>
        <div>
          <img id='login-front-logo' className={styles.frontLogo}src={require('../../../images/updated logo.png')} alt='logo' />
        </div>
        <div id='login-form-area' className={styles.formArea}>
          <h2>Login:</h2>
          <form id='login-form' className={styles.loginForm} onSubmit={handleSubmit}>
            <input placeholder='Email' id='email' className={styles.email} type='text' value={ email } onChange={handleEmailChange} />
            <input placeholder='Password' id='password' className={styles.email} type='password' value={ password } onChange={handlePasswordChange} />
            <input role='submit-button' id='submit' className={styles.submit} type="submit" value="Submit" />
          </form>
          <p id='login-signup-link' className={styles.signup}>Don't have an account? <a href='/signup' className={styles.signupLink}>Sign up</a></p>
          <p id='login-reset-link' className={styles.forgottenPassword}>Forgotten password? <a href='/reset' className={styles.forgottenPasswordLink}>Reset Password</a></p>
        </div>
      </div>
    );
}

export default LogInForm;
