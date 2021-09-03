import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({
    search: {
        display: 'flex',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.common.white,
        // '&:hover': {backgroundColor: theme.palette.common.white},
        // marginRight: theme.spacing(2),
        // marginLeft: theme.spacing(2),
        width: '100%',
      },
      searchIcon: {
        padding: theme.spacing(2, 2),
        height: '100%',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
        flexGrow: 1,
        backgroundColor: theme.palette.common.white,
        borderRadius: 10,
        paddingTop: theme.spacing(1),
        paddingLeft: theme.spacing(1),
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: theme.spacing(0),
        width: '100%',
      },
      btn: {
        backgroundColor: "#E09F3E",
        color: "#fff",
        fontSize: "16px",
        padding: "5px 30px",
        borderRadius: "4px",
        border: "none",
        cursor: "pointer",
        marginLeft: theme.spacing(1)
    }
}));

const SearchBar = () => {
    const classes = useStyles();
    const baseUrl = "https://thestormlightapi.com/api/";
    const [searchText, setSearchText] = useState(baseUrl);
    const [searchResults, setSearchResults] = useState({});

    const handleSearchChange = (e) => {
        console.log(e.target.value);
        setSearchText(e.target.value)
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted")
        // fetch(searchText)
        // .then(resp => resp.json())
        // .then(data => {
        //     setSearchResults(data);
        // })
    }

    return (
        <form className={classes.search} onSubmit={handleSearchSubmit}>
            <TextField
                id="searchField"
                value={searchText}
                className={`${classes.inputRoot} ${classes.inputInput}`}
                helperText="Some examples will go here"
                margin="none"
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearchChange}
                variant="standard"
                color="primary"
                InputProps={{
                    startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                }}
                FormHelperTextProps={{
                    variant: "filled"
                }}
            />
            <input type="submit" value="Search" className={classes.btn} />
        </form>
    )
}

export default SearchBar;


// {/* <InputBase
//     defaultValue={baseUrl}
//     classes={{
//     root: classes.inputRoot,
//     input: classes.inputInput,
//     }}
//     inputProps={{ 'aria-label': 'search' }}
//     onChange={handleSearchChange}
// /> */}

// {/* <div className={classes.searchIcon}>
//     <SearchIcon />
// </div> */}