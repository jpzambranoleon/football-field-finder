import { Groups } from "@mui/icons-material";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import SimpleTable from "./components/SimpleTable";

export default function PostPage() {
    return (
       <main>
           <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
                <Container>
                    <Grid container>
                        <Grid item>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 5 }}>
                                <Avatar sx={{ bgcolor: green[400], mr: 2, height: '55px', width: '55px' }} >
                                    <Groups fontSize="large" />
                                </Avatar> 
                                <Typography variant="h5" fontWeight="bold">
                                    Looking for more players to join 
                                </Typography>
                            </Box>
                            <Typography variant="body1" paragraph>
                                We are Team Name FC! We play every Sunday at Lakeside Field Park. 
                                We are looking for more players to come and join our team.
                                We are hoping to get enough players to play on the Sunday League Tornament.
                                We practice on Saturdays from 3:30 to 6:00 pm.
                            </Typography>
                        </Grid>
                        <SimpleTable />
                    </Grid>
                </Container>
           </Box>
       </main> 
    )
};