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
        fontFamily: "'Oswald', sans-serif",
        letterSpacing: "5px",
        fontSize: "60px",
        marginTop: "1%",
        marginBottom: "1%",
        fontWeight: "400",
    },
    subTitle: {
        fontFamily: "'Oswald', sans-serif",
        letterSpacing: "1px",
        fontSize: "30px",
        marginTop: 0,
        marginBottom: "1%",
        fontWeight: "400",
    }
}));

const HomePage = () => {

    const classes = useStyles();

    return (
        <div>
            <Header/>
            <div className={classes.root}>
                <h1 className={classes.title}>Welcome to the Stormlight API</h1>
                <h3 className={classes.subTitle}>Find all the data from the world of Roshar</h3>
                <SearchDataContainer />
                <InformationContainer />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;