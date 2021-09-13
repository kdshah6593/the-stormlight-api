import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from '../components/SearchBar';
import JsonOutput from '../components/JsonOutput';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.error.light,
      width: "50%",
      display: "flex",
      flexDirection: "column",
      padding: "10px 50px 30px 50px",  
      margin: "5px 5px 25px 5px",
    },
    subTitle: {
        fontFamily: "'Cinzel Decorative', cursive",
        fontWeight: 900,
        fontSize: "24px"
    }
}));

const SearchDataContainer = () => {
    const classes = useStyles();

    const [searchResults, setSearchResults] = useState();

    const collectSearchResults = (result) => {
        setSearchResults(result);
    }

    return (
        <div className={classes.root}>
            <h3 className={classes.subTitle}>Search the API</h3>
            <SearchBar collectSearchResults={collectSearchResults} />
            <h3 className={classes.subTitle}>Response</h3>
            <JsonOutput searchResults={searchResults} />
        </div>
    )
}

export default SearchDataContainer;