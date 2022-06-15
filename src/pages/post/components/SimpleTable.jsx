import { Paper, Grid, TableBody, TableCell, TableContainer, TableRow, Typography, Table } from "@mui/material";

function createData(name, item) {
    return { name, item };
}

const rows = [
    createData('Team Name', 'Team FC'),
    createData('Number of players', 8),
    createData('Location', 'Hot Springs, AR'),
    createData('Phone', '555-555-5555'),
    createData('Email', 'something@gmail.com'),
    createData('Whatsapp', '555-555-5555')
]

const SimpleTable = () => {
    return (
        <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h5" paragraph fontWeight="bold">
                Team Info
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

export default SimpleTable;