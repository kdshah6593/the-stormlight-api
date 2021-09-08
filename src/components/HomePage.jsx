import React from 'react';
import Header from '../components/Header'
import SearchDataContainer from '../containers/SearchDataContainer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
        fontFamily: "'Cinzel Decorative', cursive",
        letterSpacing: "5px",
        fontSize: "60px",
        marginTop: "1%",
        marginBottom: "1%",
    },
    subTitle: {
        fontFamily: "'Cinzel Decorative', cursive",
        letterSpacing: "5px",
        fontSize: "30px",
        marginTop: "1%",
        marginBottom: "1%",
    }
}));

const HomePage = () => {

    const classes = useStyles();

    const e = <span>e</span>

    return (
        <div>
            <Header/>
            <div className={classes.root}>
                <h1 className={classes.title}>Welcome to th<span style={{marginLeft: "17px"}}>e</span> Stormlight API</h1>
                <h3 className={classes.subTitle}>Find all th{e} data from th{e} world of Roshar</h3>
                <SearchDataContainer />
            </div>
        </div>
    )
}

export default HomePage;