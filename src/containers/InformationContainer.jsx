import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.error.light,
        width: "50%",
        display: "flex",
        flexDirection: "column",
        padding: "10px 50px 30px 50px",  
        margin: "5px 5px 25px 5px",
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
            <p className={classes.content}>I will contain More Information</p>
            <p className={classes.content}>I will contain More Information</p>
            <p className={classes.content}>I will contain More Information</p>
            <p className={classes.content}>I will contain More Information</p>
        </div>
    )
}

export default InformationContainer
