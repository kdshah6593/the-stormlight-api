import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from '../components/SearchBar';
import JsonOutput from '../components/JsonOutput';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.error.light,
      width: "50%",
      display: "flex",
      flexDirection: "column",
      padding: "10px 75px 50px 75px",  
    },
    subTitle: {
        fontFamily: "'Cinzel Decorative', cursive",
        fontWeight: 900,
        fontSize: "24px"
    }
}));

const SearchDataContainer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h3 className={classes.subTitle}>Search the API</h3>
            <SearchBar />
            <p>Try Out these</p>
            <h3 className={classes.subTitle}>Response</h3>
            <JsonOutput />
        </div>
    )
}

export default SearchDataContainer;