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
          <p className={classes.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className={classes.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className={classes.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </>
    )
}

export default Authentication;