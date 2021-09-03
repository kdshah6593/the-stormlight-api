import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    search: {
        display: 'flex',
        // position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.common.white,
        '&:hover': {backgroundColor: theme.palette.common.white},
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        width: '100%',
        // [theme.breakpoints.up('sm')]: {
        //   marginLeft: theme.spacing(3),
        //   width: 'auto',
        // },
      },
      searchIcon: {
        padding: theme.spacing(2, 2),
        height: '100%',
        // position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
        flexGrow: 1,
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: theme.spacing(0),
        width: '100%',
        // [theme.breakpoints.up('sm')]: {
        //   width: '100ch',
        // },
      },
      btn: {
        backgroundColor: "#E09F3E",
        color: "#fff",
        fontSize: "16px",
        padding: "6px 30px",
        borderRadius: "4px",
        border: "none",
        cursor: "pointer",
    }
}));

const SearchBar = () => {
    const classes = useStyles();
    const baseUrl = "https://thestormlightapi.com/api/";
    const [searchText, setSearchText] = useState(baseUrl);

    const handleSearchChange = (e) => {
        setSearchText(e.target.value)
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted")
    }

    return (
        <form className={classes.search} onSubmit={handleSearchSubmit}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              defaultValue={baseUrl}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearchChange}
            />
            <input type="submit" value="Search" className={classes.btn} />
        </form>
    )
}

export default SearchBar;