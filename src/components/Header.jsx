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
  },
  navHeadings: {
    flexGrow: 1,
    textAlign: 'right',
  },
  toolbar: theme.mixins.toolbar,
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            The Stormlight API
          </Typography>
          <Typography className={classes.navHeadings}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}><Button color="inherit">Home</Button></Link>
            <Link to="/about" style={{ color: 'inherit', textDecoration: 'inherit'}}><Button color="inherit">About</Button></Link>
            <Link to="/documentation" style={{ color: 'inherit', textDecoration: 'inherit'}}><Button color="inherit">Documentation</Button></Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </div>
  );
}