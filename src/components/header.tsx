import React from 'react';
import { makeStyles } from '@material-ui/core';

const Header = () => {
    const classes = useClasses();

    return (
        <header className={classes.header}>
            <h1 className={classes.title}>Travel assistant</h1>
        </header>
    );
}

export default Header;

const useClasses = makeStyles({
    header: {
        height: '120px',
        display: 'flex',
        alignItems: 'center',
    },
    title: {
        margin: '0px auto',
        padding: '0px 24px',
    }
})
