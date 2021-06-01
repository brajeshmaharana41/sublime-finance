import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImportantSectionCard from './ImportantSectionCard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        left: '0',
        marginLeft: '2vw',
        fontSize: '2rem',
    },
    text: {
        color: 'black',
        fontFamily: 'system-ui',
        fontWeight: '700',
        textAlign: 'left',
        marginBottom: '3vh'
        
    },
    grid: {
        
        background: 'whitesmoke'
    }
}));

export default function ImportantSection() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.text}>{"Important(3)"}</div>
            <Grid container spacing={3}
                direction="column"
                className={classes.grid}>
                <Grid item xs={6}>
                    <ImportantSectionCard />
                </Grid>
                <Grid item xs={6}>
                    <ImportantSectionCard />
                </Grid>
                <Grid item xs={6}>
                    <ImportantSectionCard />
                </Grid>
            </Grid>
        </div >
    );
}
