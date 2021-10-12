import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: "#ffefdd",
      display: 'flex',
      flexDirection: 'column',
      margin: theme.spacing(1,10,-2,0),
    },
    title: {
      fontFamily: "'Oswald', sans-serif",
      letterSpacing: "5px",
      fontSize: "30px",
      margin: theme.spacing(2,0,0,0),
    },
    anchor: {
      height: "100px",
      marginTop: "-100px"
    },
    content: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: '500',
      fontSize: '20px',
    },
    table: {
      minWidth: "auto",
    },
    response: {
      backgroundColor: "white",
      width: "50%",
      // minHeight: "40vh",
      // maxHeight: "40vh",
      margin: theme.spacing(0,0,2,0)
    },
    pre: {
      margin: 0
    }
}));

const Books = (props) => {
    const classes = useStyles();

    function createData(name, type, description) {
      return { name, type, description };
    }

    const rows = [
      createData('Title', "string", "The title of this book"),
      createData('Author', "string", "The author of this book"),
      createData('ISBN', "string", "The International Standard Book Number (ISBN-13) that uniquely identifies this book."),
      createData('Pages', "integer", "The number of pages in this book."),
    ];

    const response = String.raw`
    {
      "data": [
        {
          "title": "The Way of Kings",
          "author": "Brandon Sanderson",
          ...
        },
        {
          "title": "Words of Radiance",
          "author": "Brandon Sanderson",
          ...
        },
      ]
    }
    `;

    return (
      <>
        <div id={props.id} className={classes.anchor} ></div>
        <div className={classes.root} id={props.id}>
          <h2 className={classes.title}>Books</h2>
          <p className={classes.content}>Example Request</p>
          <code>"https://www.anapioficeandfire.com/api/v1/books"</code>
          <p className={classes.content}>Example Response</p>


          <Paper elevation={3} className={classes.response}>
            <pre className={classes.pre}>{response}</pre>
          </Paper>
          

          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="books table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">{row.name}</TableCell>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>{row.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <p className={classes.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </>
    )
}

export default Books;