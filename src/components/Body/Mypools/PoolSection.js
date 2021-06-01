import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PoolSectionCard from './PoolSectionCard';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        left: '0',
        fontSize: '2rem',
        margin: '5vh 0 5vh 10vw'
    },
    text: {
        color: 'black',
        fontFamily: 'system-ui',
        fontWeight: '700',
        textAlign: 'left',
        marginBottom: '5vh'
    },
    appbar: {
        background: 'white',
        boxShadow: 'white'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(1, 23),
        height: '100%',
        position: 'absolute',
        color: 'black',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

export default function PoolSection() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.root}>
            <div className={classes.text}>{"My Pools"}</div>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar className={classes.Toolbar}>
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="disabled tabs example"
                        className={classes.tabsMain}
                    >
                        <Tab label="All Pools" />
                        <Tab label="Borrow" disabled />
                        <Tab label="Lend" disabled />
                    </Tabs>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar> 
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <PoolSectionCard button="Reapy" card1="Borrow Rate" card2="Borrowed Amount" card4="Next Payment" card3="Repayment Progress" card11="11%" card12="1,000 DOT" card14="200 DOT" value={45} />
                </Grid>
                <Grid item xs={6}>
                    <PoolSectionCard button="Add Collateral" card1="Borrow Rate" card2="Borrowed Amount" card4="Ends in" card3="Collection Progress" card11="10%" card12="1,000 DOT" card14="2d 12h 34m" value={45} />
                </Grid>
                <Grid item xs={6}>
                    <PoolSectionCard button="View More" card1="Borrow Rate" card2="Borrowed Amount" card4="Ends in" card3="Repayment Progress" card11="200 DOT" card12="1,000 DOT" card14="30 Jan 2021" value={100} />
                </Grid>
                <Grid item xs={6}>
                    <PoolSectionCard button="View More" card1="Borrow Rate" card2="Borrowed Amount" card4="Ends in" card3="Repayment Progress" card11="200 DOT" card12="1,000 DOT" card14="30 Jan 2021" value={100} />
                </Grid>
                <Grid item xs={6}>
                    <PoolSectionCard button="View More" card1="Borrow Rate" card2="Borrowed Amount" card4="Ends in" card3="Repayment Progress" card11="200 DOT" card12="1,000 DOT" card14="30 Jan 2021" value={100} />
                </Grid>
            </Grid>
        </div>
    );
}
