import styles from './resetconfirmation.module.css';

const ResetConfirmation = () => {

    return (
        <div className={styles.resetContainer}>
            <h1 className={styles.resetText}>Reset Successful</h1>
            <div className={styles.login} >Click here to <a className={styles.loginLink} href = '/login' id='link'>Log In</a></div>
        
        </div>
    )

}



export default ResetConfirmation