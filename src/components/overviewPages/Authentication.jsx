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

const Authentication = (props) => {
    const classes = useStyles();
    
    return (
      <>
        <div id={props.id} className={classes.anchor} ></div>
        <div className={classes.root}>
          <h2 className={classes.title}>Authentication</h2>
          <p className={classes.content}>I wanted to build this as a free and open information source of data.</p>
          <p className={classes.content}>Thus, it requires no authentication or API Key to query the API for data. All you have to do is make the correct GET request.</p>
        </div>
      </>
    )
}

export default Authentication;