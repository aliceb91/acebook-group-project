import React, { useState } from 'react';
import styles from "./LoginForm.module.css";

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
      <div className={styles.fullPage}>
        <div>
          <img className={styles.frontLogo}src={require('../../../images/updated logo.png')} alt='logo' />
        </div>
        <div className={styles.formArea}>
          <h2>Login:</h2>
          <form className={styles.loginForm} onSubmit={handleSubmit}>
            <input placeholder='Email' id='email' className={styles.email} type='text' value={ email } onChange={handleEmailChange} />
            <input placeholder='Password' id='password' className={styles.email} type='password' value={ password } onChange={handlePasswordChange} />
            <input role='submit-button' id='submit' className={styles.submit} type="submit" value="Submit" />
          </form>
          <p className={styles.signup}>Don't have an account? <a href='/signup' className={styles.signupLink}>Sign up</a></p>
          <p className={styles.forgottenPassword}>Forgotten password? <a href='/reset' className={styles.forgottenPasswordLink}>Reset Password</a></p>
        </div>
      </div>
    );
}

export default LogInForm;
