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
    table: {
      minWidth: "auto",
    },
}));


const ResourceTable = (props) => {
    const classes = useStyles()

    function createData(name, type, description) {
        return { name, type, description };
    }
    
    return (

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
                    {props.rows.map((row) => (
                    <TableRow key={row.name}>
                        <TableCell component="th" scope="row">{row.name}</TableCell>
                        <TableCell>{row.type}</TableCell>
                        <TableCell>{row.description}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ResourceTable
