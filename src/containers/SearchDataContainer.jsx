import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from '../components/SearchBar';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "lightblue",
      width: "50%",
      display: "flex",
      flexDirection: "column",
      padding: "50px 50px 150px 50px",  
    }
}));

const SearchDataContainer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <p>Search Data Container</p>
            <SearchBar />
            <p>Holds the JSON Output</p>
        </div>
    )
}

export default SearchDataContainer;