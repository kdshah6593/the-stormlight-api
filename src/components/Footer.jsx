import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#00838f",
      color: theme.palette.common.white,
      flexGrow: 1,
    },
    container: {
        display: "flex",
        flexDirection: "row",
        margin: theme.spacing(0, 2, 0, 2),
        justifyContent: "space-between",
    },
    icons: {
        display: "flex",
        flexDirection: "row",
        margin: theme.spacing(1, 0, 0, 0),
        justifyContent: "space-around",
    },
    content: {
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: '500',
        fontSize: '14px',
    }
}));

const Footer = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <p className={classes.content}>Copyright © {new Date().getFullYear()} MIT Licensed</p>
                <p className={classes.content}>Created {'&'} Designed by Kunal Shah</p>
                <div className={classes.icons}>
                    <Link href="https://github.com/kdshah6593/the-stormlight-api-frontend" target="_blank" rel="noopener" color="inherit"><GitHubIcon fontSize="large" /></Link>
                    <Link href="https://www.linkedin.com/in/kunalshah-6593/" target="_blank" rel="noopener" color="inherit"><LinkedInIcon fontSize="large" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;

//Copyright Notice
//Privacy Policy Link
//Sitemap
//Logo
//Contact Information
//Social Media Icons
//Email Signup Form