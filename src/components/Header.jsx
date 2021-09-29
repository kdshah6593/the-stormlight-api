import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link, NavLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

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
  menu: {
    marginLeft: "16px",
  },
  menuLink: {
    color:"inherit",
    textDecoration: "inherit",
  },
  toolbar: theme.mixins.toolbar,
}));


const Header = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <div className={classes.menu}>
            <IconButton
              aria-label="menu button"
              aria-controls="menu-header"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-header"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link to="/login" className={classes.menuLink}><MenuItem onClick={handleClose}>Log In</MenuItem></Link>
              <Link to="/signup" className={classes.menuLink}><MenuItem onClick={handleClose}>Sign Up</MenuItem></Link>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </div>
  );
}

export default Header;