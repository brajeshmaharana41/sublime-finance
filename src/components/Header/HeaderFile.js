import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appbar: {
        background: 'white',
        height: 49
    },
    text: {
        color: 'black',
        fontWeight: 900,
        fontSize: '1.25rem'
    },
    tabsMain: {
        color: 'black !important',
        margin: '2vh 20vw'
    },
    Toolbar: {
        minHeight: '10px'
    }
}));

export default function HeaderFile() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar className={classes.Toolbar}>
                    <div className={classes.text}>{"Sublime"}</div>
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="disabled tabs example"
                        className={classes.tabsMain}
                    >
                        <Tab label="Dashboard" />
                        <Tab label="Borrow" disabled/>
                        <Tab label="Lend" disabled />
                        <Tab label="Profile" disabled />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    );
}
