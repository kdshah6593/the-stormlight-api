import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: "#ffefdd",
      display: 'flex',
      flexDirection: 'column',
      margin: theme.spacing(1,10,-2,0),
    },
    title: {
      fontFamily: "'Oswald', sans-serif",
      letterSpacing: "5px",
      fontSize: "30px",
      margin: theme.spacing(2,0,0,0),
    },
    anchor: {
      height: "100px",
      marginTop: "-100px"
    },
    content: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: '500',
      fontSize: '20px',
  }
}));

const Introduction = (props) => {
    const classes = useStyles();
    
    return (
      <>
        <div id={props.id} className={classes.anchor} ></div>
        <div className={classes.root}>
            <h2 className={classes.title}>Introduction</h2>
            <p className={classes.content}>The documentation here will help you to use this API and familiarize yourself with all that is available. It provides all the information required to get started.</p>
            <p className={classes.content}>If you go to the Resources Tab, you can find more in-depth information on what data is available through this API.</p>
        </div>
      </>
    )
}

export default Introduction;
