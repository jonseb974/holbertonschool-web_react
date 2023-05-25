import React from 'react';
import { StyleSheet } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';


const styles = StyleSheet.create({
    appHeader: {
        display: 'flex',
    },
    logo: {
        width: '200px',
        height: '200px',
    },
    headerText: {
        color: 'var(--holberton-red)',
        margin: 'auto auto auto 0',
    },
});

const Header = () => {
    return (
        <div className={css(appHeader)}>
            <img src={logo} alt={"Holberton logo"} className={css(styles.logo)} />
            <h1 className={css(styles.headerText)}>School dashboard</h1>
        </div>
    );
};

export default Header;
