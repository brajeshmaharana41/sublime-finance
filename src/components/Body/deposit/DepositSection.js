import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import DepositSectionCard from './DepositSectionCard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        left: '0',
        margin: '5vh 0 2vh 10vw',
        fontSize: '2rem'
    },
    text: {
        color: 'black',
        fontFamily: 'system-ui',
        fontWeight: '700',
        textAlign: 'left'
    },
    button: {
        width: '100%',
        background: 'whitesmoke',
        fontWeight: '700'
    }
}));

export default function DepositSection() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.text}>{"Deposit and save Overview"}</div>
            <Grid container spacing={6}>
                <Grid item xs={4}>
                    <DepositSectionCard value="$0" text="Deposited" />
                </Grid>
                <Grid item xs={4}>
                    <DepositSectionCard value="$0" text="Interest Earned" />
                </Grid>
                <Grid item xs={4}>
                    <DepositSectionCard value="6%" text="Interest Rate" />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Button className={classes.button} variant="contained"> View More</Button>
            </Grid>
        </div>
    );
}
