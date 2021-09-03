import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from '../components/SearchBar';
import JsonOutput from '../components/JsonOutput';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "lightblue",
      width: "50%",
      display: "flex",
      flexDirection: "column",
      padding: "50px 50px 50px 50px",  
    }
}));

const SearchDataContainer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h3>Search the API</h3>
            <SearchBar />
            <h3>Response</h3>
            <JsonOutput />
        </div>
    )
}

export default SearchDataContainer;