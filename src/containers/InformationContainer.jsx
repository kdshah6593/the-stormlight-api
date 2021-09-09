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
}));

const InformationContainer = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <p>I will contain More Information</p>
            <p>I will contain More Information</p>
            <p>I will contain More Information</p>
            <p>I will contain More Information</p>
        </div>
    )
}

export default InformationContainer
