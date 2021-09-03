import React from 'react';
import Header from '../components/Header'
import SearchDataContainer from '../containers/SearchDataContainer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }
}));

const HomePage = () => {

    const classes = useStyles();

    return (
        <div>
            <Header/>
            <div className={classes.root}>
                <h1>Welcome to the Stormlight API</h1>
                <h3>Find all the data from the world of Roshar</h3>
                <SearchDataContainer />
            </div>
        </div>
    )
}

export default HomePage;