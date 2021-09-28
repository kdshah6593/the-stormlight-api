import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from '../components/SearchBar';
import JsonOutput from '../components/JsonOutput';

const useStyles = makeStyles((theme) => ({
    root: {
    //   backgroundColor: "#ffefdd", //#ffe4c2  theme.palette.error.light
      width: "50%",
      display: "flex",
      flexDirection: "column",
    //   alignItems: "center",
      paddingBottom: "5%",
    //   padding: "10px 50px 30px 50px",  
    //   margin: "0px 5px 25px 5px",
    },
    subTitle: {
        fontFamily: "'Oswald', sans-serif",
        fontWeight: 900,
        fontSize: "24px",
        letterSpacing: '1px',
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