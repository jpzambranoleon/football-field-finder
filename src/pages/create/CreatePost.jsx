import { Box, Container, Grid, Paper, Typography } from "@mui/material";

export default function CreatePost() {
    return (
       <main>
           <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
                <Container>
                    <Grid container spacing={2} align='center'>
                        <Grid item>
                            <Paper>
                                <Typography>
                                    Team
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper>
                                <Typography>
                                    Free Agent
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper>
                                <Typography>
                                    Trainer
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
           </Box>
       </main> 
    )
};