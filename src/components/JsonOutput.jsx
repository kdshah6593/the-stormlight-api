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
        marginLeft: theme.spacing(1),
        fontSize: "16px",
        fontFamily: "'Montserrat, sans-serif"
    },

}));

const JsonOutput = (props) => {
    const classes = useStyles();

    const jsonOutput = JSON.stringify(props.searchResults, null, 2);
    
    return (
        <Paper elevation={3} className={classes.root}>
            <pre className={classes.output}>{jsonOutput}</pre>
        </Paper>
    )
}

export default JsonOutput
