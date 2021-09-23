import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: "#ffefdd", //theme.palette.error.light
        width: "50%",
        display: "flex",
        flexDirection: "column",
        // padding: "10px 50px 30px 50px",  
        // margin: "0px 5px 0px 15px",
    },
    infoContainer: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(0,0,6,0),
        '& > *': {
            '&:first-child': {
                margin: theme.spacing(0,10,0,0)
            },
            '&:last-child': {
                margin: theme.spacing(0,0,0,10)
            },
            margin: theme.spacing(1,4,1,4),
            width: "25vh",
            height: "25vh",
        },
    },
    content: {
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: '500',
        fontSize: '20px',
    }
}));

const InformationContainer = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <div className={classes.infoContainer}>
                <Paper elevation={3}>
                    <p>Text</p>
                </Paper>
                <Paper elevation={3}>
                    <p>Text</p>
                </Paper>
                <Paper elevation={3}>
                    <p>Text</p>
                </Paper>
            </div>
        </div>
    )
}

export default InformationContainer
