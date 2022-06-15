import { Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";

function createData(name, item) {
    return { name, item };
}

const rows = [
    createData('phone', '555-555-5555'),
    createData('email', 'something@gmail.com'),
    createData('whatsapp', '555-555-5555')
]

const Table = () => {
    return (
        <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h5" gutterBottom fontWeight="bold">
                Team
            </Typography>
            <Typography variant="h5" gutterBottom fontWeight="bold">
                Author
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.item}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid> 
    );
}

export default Table;