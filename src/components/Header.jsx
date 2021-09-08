import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0,
    fontFamily: "'Oswald', sans-serif",
    letterSpacing: "5px",
    fontSize: "30px",
  },
  navHeadings: {
    flexGrow: 1,
    textAlign: 'right',
  },
  linkBtn: {
    backgroundColor: '#fff',
    fontFamily: `'Oswald', sans-serif`,
    color: "inherit",
    letterSpacing: "2px",
    '&:hover': {
      backgroundColor: theme.palette.error.light,
      color: '#fff',
    }
  },
  toolbar: theme.mixins.toolbar,
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            THE STORMLIGHT API
          </Typography>
          <Typography className={classes.navHeadings}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}><Button className={classes.linkBtn}>Home</Button></Link>
            <Link to="/about" style={{ color: 'inherit', textDecoration: 'inherit'}}><Button className={classes.linkBtn}>About</Button></Link>
            <Link to="/documentation" style={{ color: 'inherit', textDecoration: 'inherit'}}><Button className={classes.linkBtn}>Documentation</Button></Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </div>
  );
}