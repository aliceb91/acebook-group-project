import styles from './resetfailed.module.css';

const ResetFailed = () => {
    
    return (
        <div className={styles.resetContainer}>
            <h1 className={styles.resetText}>Reset Unsuccessful</h1>
            <div className={styles.resetReason}>Passwords Must Match</div>
            <div className={styles.reset}>Try Again  <a className={styles.resetLink} href = '/reset' id ='link'>Here</a></div>
            <div className={styles.login} >Already Have An Account? Click here to <a className={styles.loginLink} href = '/login' id='link'>Log In</a></div>
        </div>
    )
}

export default ResetFailed