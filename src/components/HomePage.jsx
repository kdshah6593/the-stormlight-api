import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import SearchDataContainer from '../containers/SearchDataContainer';
import InformationContainer from '../containers/InformationContainer';
import BackgroundImage from '../images/wayofkings.jpg';
import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: 'cover',
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
        marginTop: 0,
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
                <h1 className={classes.title}>Welcome to th{e} Stormlight API</h1>
                <h3 className={classes.subTitle}>Find all th{e} data from th{e} world of Roshar</h3>
                <SearchDataContainer />
                <InformationContainer />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;