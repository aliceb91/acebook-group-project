import React, { useState } from 'react';


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
                } else {
                    navigate('/resetfailed')
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
        <form onSubmit={handleSubmit}>
            <label for = "email">Email Address</label><br/>
            <input placeholder="Email" type = "text" id = "email" name = "email" onChange={handleEmailChange}/><br/>
            <label for = "password1">Enter Password</label><br/>
            <input placeholder = "Enter Password" type = "text" id = "password1" name = "password1" onChange={handlePasswordChange}/><br/>
            <label for = "password2">ReEnter Password</label><br/>
            <input placeholder = "ReEnter Password" type = "text" id = "password2" name = "password2" onChange={handleSecondPassword}/><br/>
            <input id='submit' type="submit" value="Submit" />
        </form>
    )

}


export default ResetPassword