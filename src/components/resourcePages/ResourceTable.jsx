import React from 'react'

const ResourceTable = () => {
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
    )
}

export default ResourceTable
