import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OverViewCard from './OverViewCard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        left: '0',
        marginLeft: '10vw',
        fontSize: '2rem'
    },
    text: {
        color: 'black',
        fontFamily: 'system-ui',
        fontWeight: '700',
        textAlign: 'left'
    }
}));

export default function OverView() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.text}>{"Overview"}</div>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <OverViewCard value="$16,034" text="Total Borrowed Amount" />
                </Grid>
                <Grid item xs={6}>
                    <OverViewCard value="$16,032" text="Total Supplied Amount" />
                </Grid>
                <Grid item xs={6}>
                    <OverViewCard value="32%" text="Total Borrow Rate" />
                </Grid>
                <Grid item xs={6}>
                    <OverViewCard value="15%" text="Total Lending Rate" />
                </Grid>
            </Grid>
        </div>
    );
}
