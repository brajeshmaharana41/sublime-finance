import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '2vh',
        left: '0',

    },
    Card: {
        width: '27vw',
        height: '15vh',
        background: 'whitesmoke !important',
        textAlign: 'left',
        margin: '1vh 3vw 0 0',
        boxShadow: 'none',
        border: '0.5px solid darkslategrey'
    },
    title: {
        margin: '0.25rem 2rem',
        fontWeight: 700,
        fontSize: '2rem'
    },
    pos: {
        marginLeft: '2rem'
    }
}));

export default function OverViewCard(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={classes.Card}>
                <CardContent>
                    <Typography className={classes.title} color="textPrimary" gutterBottom>
                        {props.value}
                    </Typography>
                    <Typography className={classes.pos} color="textPrimary">
                        {props.text}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
