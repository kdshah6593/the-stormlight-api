import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link, NavLink } from 'react-router-dom';

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
  link: {
    color: 'inherit',
    textDecoration: 'inherit',
    padding: "0px 1px 12px 1px",
    margin: "0px 4px 0px 4px",
    borderBottom: '4px solid #fff',
  },
  activeLink: {
    borderBottom: '4px solid #00838f',
    color: '#00838f',
  },
  linkBtn: {
    backgroundColor: '#fff',
    fontFamily: `'Oswald', sans-serif`,
    color: "inherit",
    letterSpacing: "2px",
    '&:hover': {
      backgroundColor: "#00838f", //theme.palette.error.light
      color: '#fff',
    },
  },
  toolbar: theme.mixins.toolbar,
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            THE STORMLIGHT API
          </Typography>
          <Typography className={classes.navHeadings}>
            <NavLink exact to="/" activeClassName={classes.activeLink} className={classes.link}><Button className={classes.linkBtn}>Home</Button></NavLink>
            <NavLink to="/about" activeClassName={classes.activeLink} className={classes.link}><Button className={classes.linkBtn}>About</Button></NavLink>
            <NavLink to="/documentation" activeClassName={classes.activeLink} className={classes.link}><Button className={classes.linkBtn}>Documentation</Button></NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </div>
  );
}

export default Header;