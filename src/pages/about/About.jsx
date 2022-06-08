import { Groups, Person, Sports } from "@mui/icons-material";
import { Avatar, Box, Card, CardMedia, Container, Grid, Typography } from "@mui/material";

export default function About() {
    return (
       <main>
           <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
               <Container>
                   <Grid container spacing={4}>
                       <Grid item sx={12} sm={6}>
                           <Box>
                               <Typography
                                    component="h1"
                                    variant="h4"
                                    align="left"
                                    color="text.primary"
                               >
                                   Designed and developed by a small team of talented developers.
                               </Typography>
                               <Typography
                                    variant="h6"
                                    align="left"
                                    color="text.secondary"
                                    paragraph
                                >
                                    This web app was created to help people who are interested in the sport of soccer 
                                    to meet up with local teams in the area that are looking for players to join. 
                                </Typography>
                                <Grid container spacing={2} align="center">
                                    <Grid item sx={12} sm={4}>
                                        <Typography
                                            variant="h5"
                                            gutterBottom
                                        >
                                            Team
                                        </Typography>
                                        <Avatar sx={{ width: 60, height: 60, mb: 2, bgcolor: "secondary.main" }}>
                                            <Groups fontSize="large" />
                                        </Avatar>
                                        <Typography variant="body1" color="text.secondary">
                                            You can create a team or join an existing one in your area
                                        </Typography>
                                    </Grid>
                                    <Grid item sx={12} sm={4}>
                                        <Typography
                                            variant="h5"
                                            gutterBottom
                                        >
                                            Free Agent
                                        </Typography>
                                        <Avatar sx={{ width: 60, height: 60, mb: 2, bgcolor: "secondary.main" }}>
                                            <Person fontSize="large" />
                                        </Avatar>
                                        <Typography variant="body1" color="text.secondary">
                                            Teams can recruit free agents that are looking for a team to join
                                        </Typography>
                                    </Grid>
                                    <Grid item sx={12} sm={4}>
                                        <Typography
                                            variant="h5"
                                            gutterBottom
                                        >
                                            Trainer
                                        </Typography>
                                        <Avatar sx={{ width: 60, height: 60, mb: 2, bgcolor: "secondary.main" }}>
                                            <Sports fontSize="large" />
                                        </Avatar>
                                        <Typography variant="body1" color="text.secondary">
                                            If you are an experienced, you can offer training services
                                        </Typography>
                                    </Grid>
                                </Grid>
                           </Box>
                       </Grid>
                       <Grid item xs={12} sm={6}>
                           <Card>
                               <CardMedia 
                                    component="img"
                                    image="/images/soccer-coming-soon.jpg"
                               />
                           </Card>
                       </Grid>
                   </Grid>
               </Container>
           </Box>
       </main> 
    )
}