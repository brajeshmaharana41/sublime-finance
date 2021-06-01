import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import { Button, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '2vh',
    },
    Card: {
        width: 407,
        height: 180,
        paddingTop: 8,
        background: '#FFFFFF',
        textAlign: 'left',
        boxShadow: '0px 1px 2px rgba(90, 97, 163, 0.12)',
        boxSizing: 'border-box',
        margin: 10
    },
    title: {
        margin: '0.25rem 2rem',
        fontWeight: 700,
        fontSize: '2rem'
    },
    pos: {
        marginLeft: '3rem',
        fontSize: 13
    },
    button: {
        paddingBottom: 1,
        margin: theme.spacing(3)
    },
}));

export default function Important() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={classes.Card}>
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar}>
                            R
                        </Avatar>
                    }
                    title="Vote For Extension"
                    subheader="@Lorem_ipsum"
                />
                <Typography className={classes.pos} color="textPrimary">
                    Vote ends in 2 days
                </Typography>
                <Button variant="outlined" className={classes.button}>
                    Vote
                 </Button>
                <Button variant="outlined" className={classes.button}>
                    Dismiss
                </Button>
            </Card>
        </div>
    );
}
