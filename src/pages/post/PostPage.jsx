import { Groups } from "@mui/icons-material";
import { Avatar, Box, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { green } from "@mui/material/colors";

function createData(name, item) {
    return { name, item };
}

const rows = [
    createData('phone', '555-555-5555'),
    createData('email', 'something@gmail.com'),
    createData('whatsapp', '555-555-5555')
]

export default function PostPage() {
    return (
       <main>
           <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
                <Container>
                    <Grid container>
                        <Grid item>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Avatar sx={{ bgcolor: green[400], mr: 2, height: '50px', width: '50px' }} >
                                    <Groups fontSize="large" />
                                </Avatar> 
                                <Typography variant="h4" fontWeight="bold">
                                    Looking for a team to play with 
                                </Typography>
                            </Box>
                            <Typography paragraph>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, exercitationem maxime suscipit corrupti recusandae voluptate sapiente est a. Eos itaque deleniti possimus blanditiis cupiditate alias doloremque rem in quidem? Esse!
                            </Typography>
                        </Grid>
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
                    </Grid>
                </Container>
           </Box>
       </main> 
    )
};