import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

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
    }
}));

const Footer = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <p>Footer</p>
                <p>Copyright</p>
                <p>Link to Github</p>
            </div>
        </div>
    )
}

export default Footer;
