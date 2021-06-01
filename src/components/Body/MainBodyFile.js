import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OverView from './overView/OverView';
import ImportantSection from './important/ImportantSection';
import DepositSection from './deposit/DepositSection';
import CreditSection from './credit/CreditSection';
import PoolSection from './Mypools/PoolSection';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '3rem',
    },
}));

export default function MainBodyFile() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <OverView />
                    <DepositSection />
                    <CreditSection />
                    <PoolSection />
                </Grid>
                <Grid item xs={4}>
                    <ImportantSection />
                </Grid>
            </Grid>
        </div>
    );
}
