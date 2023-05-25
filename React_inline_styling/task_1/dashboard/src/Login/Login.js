import React from 'react';
import { StyleSheet } from 'aphrodite';


const styles = StyleSheet.create({
    loginParagraph: {
        margin: '3rem 0 0 2rem',
    },
    appForm: {
        display: 'flex',
        margin: '1rem 0 0 2rem',
    },
    formLabel: {
        margin: '0 1rem 0 0',
    },
    formInput: {
        margin: '0 1rem 0 0',
    },
});

const Login = () => {
    return (
        <React.Fragment>
            <p className={css(styles.loginParagraph)}>
                Login to access the full dashboard</p>
            <div className={css(styles.appForm)}>
                <label htmlFor="email" className={css(styles.formLabel)}>
                Email:
                </label>
                <input
                    type={"email"} 
                    id={"email"} 
                    name={"email"}
                    className={css(styles.formInput)}>
                    </input>
                <label htmlFor="password" className={css(styles.formLabel)}>
                    Password:
                </label>
                <input 
                    type={"password"}
                    id={"password"}
                    name={"password"}
                    className={css(styles.formInput)}>
                    </input>
                <button type="submit">OK</button>
            </div>
        </React.Fragment>
    );
};

export default Login;
