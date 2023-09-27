import React, { useState } from 'react';
import styles from './resetpassword.module.css'


const ResetPassword = ({navigate}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const handleSubmit = async(event) => {
        event.preventDefault();
        if (password === password2) {
            fetch('/users', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            .then((response) => {
                if (response.status === 200) {
                    navigate('/resetconfirmation');
                } else if (response.status === 404) {
                    navigate('/noemail')
                }
            })
        } else {
            navigate('/resetfailed')
        }


    }


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleSecondPassword = (event) => {
        setPassword2(event.target.value);
    }


    return (
        <div id='reset-full-page' className={styles.fullPage}>
            <div>
                <img id='reset-front-logo' className={styles.frontLogo} src={require('../../../images/updated logo.png')} alt='logo' />
            </div>
            <div id='reset-form-area' className={styles.resetArea}>
                <h2>Reset Password:</h2>
                <form id='reset-form' className={styles.resetForm} onSubmit={handleSubmit}>
                    <input placeholder="Email" id='email' type = "text" className={styles.email} name = "email" onChange={handleEmailChange}/>
                    <input placeholder = "Enter Password" id='password1' type = "text" className={styles.password1} name = "password1" onChange={handlePasswordChange}/>
                    <input placeholder = "ReEnter Password" id='password2'type = "text" className={styles.password2} name = "password2" onChange={handleSecondPassword}/>
                    <input className={styles.submit} id='submit' type="submit" value="Submit" />
                </form>
                <div id='signup-login' className={styles.login}>Already have an account? <a id='signup-login-link' className={styles.loginLink} href='/login'>Login</a></div>
            </div>
        </div>
    )
}


export default ResetPassword