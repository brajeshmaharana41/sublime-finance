import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import { Button, CardActions, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '2vh',
    },
    Card: {
        width: '26vw',
        height: '60vh',
        background: '#FFFFFF',
        textAlign: 'left',
        boxShadow: '5px 5px 5px 5px rgba(90, 97, 163, 0.12)',
        '&:hover': {
            border: '0.5px solid darkslategrey'
        }
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
        width: '100%',
        background: 'whitesmoke',
        fontWeight: '700'
    },
    ListItem: {
        marginRight: '5vw'
    },
    Item:{
        fontSize: 15,
        fontWeight: 50
    },
    LinearProgress: {
        width: '5vw'
    }
}));

export default function PoolSectionCard(props) {
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
                <CardContent>
                    <List>
                        <ListItem>
                            <ListItemText className={classes.ListItem}>{props.card1}</ListItemText>
                            <ListItemSecondaryAction className={classes.Item}>{props.card11}</ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemText className={classes.ListItem}>{props.card2}</ListItemText>
                            <ListItemSecondaryAction className={classes.Item}>{props.card12}</ListItemSecondaryAction>
                        </ListItem> <ListItem>
                            <ListItemText className={classes.ListItem}>{props.card3}</ListItemText>
                            <ListItemSecondaryAction className={classes.Item}>{props.value}%<LinearProgress className={classes.LinearProgress} variant="determinate" value={props.value} /></ListItemSecondaryAction>
                        </ListItem> <ListItem>
                            <ListItemText className={classes.ListItem}>{props.card4}</ListItemText>
                            <ListItemSecondaryAction className={classes.Item}>{props.card14}</ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </CardContent>
                <CardActions>
                    <Grid item xs={12}>
                        <Button className={classes.button} variant="contained"> {props.button}</Button>
                    </Grid>
                </CardActions>
            </Card>

        </div>
    );
}
