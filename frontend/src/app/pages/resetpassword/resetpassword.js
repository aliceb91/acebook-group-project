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
        <div className={styles.fullPage}>
            <div>
                <img className={styles.frontLogo} src={require('../../../images/updated logo.png')} alt='logo' />
            </div>
            <div className={styles.resetArea}>
                <h2>Reset Password:</h2>
                <form className={styles.resetForm} onSubmit={handleSubmit}>
                    <input placeholder="Email" type = "text" className={styles.email} name = "email" onChange={handleEmailChange}/>
                    <input placeholder = "Enter Password" type = "text" className={styles.password1} name = "password1" onChange={handlePasswordChange}/>
                    <input placeholder = "ReEnter Password" type = "text" className={styles.password2} name = "password2" onChange={handleSecondPassword}/>
                    <input className={styles.submit} type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )

}


export default ResetPassword