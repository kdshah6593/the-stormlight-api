import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "white",
      width: "100%",
      minHeight: "40vh",
      maxHeight: "40vh",
      overflow: "auto"
    },
    output: {
        marginLeft: theme.spacing(1)
    }
}));

const JsonOutput = () => {
    const classes = useStyles();
    
    return (
        <Paper elevation={3} className={classes.root}>
            <p className={classes.output}>JSON Output</p>
            <p className={classes.output}>JSON Output</p>
            <p className={classes.output}>JSON Output</p>
            <p className={classes.output}>JSON Output</p>
            <p className={classes.output}>JSON Output</p>
            <p className={classes.output}>JSON Output</p>
            <p className={classes.output}>JSON Output</p>
            <p className={classes.output}>JSON Output</p>
            <p className={classes.output}>JSON Output</p>
            <p className={classes.output}>JSON Output</p>
            <p className={classes.output}>JSON Output</p>
            <p className={classes.output}>JSON Output</p>
            <p className={classes.output}>JSON Output</p>
            <p className={classes.output}>JSON Output</p>
        </Paper>
    )
}

export default JsonOutput
