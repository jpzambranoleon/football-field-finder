import { Facebook, GitHub, Groups, LinkedIn, Person, Sports } from "@mui/icons-material";
import { Avatar, Box, Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Typography } from "@mui/material";
import { blue, green, pink } from "@mui/material/colors";

export default function About() {
    return (
       <main>
           <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
               <Container>
                    <Typography
                        component="h1"
                        variant="h6"
                        align="center"
                        color="success.main"
                        gutterBottom
                    >
                       About Project
                   </Typography>
                   <Grid container spacing={4}>
                       <Grid item sx={12} sm={6}>
                           <Box>
                               <Typography
                                    component="h1"
                                    variant="h4"
                                    align="left"
                                    color="text.primary"
                                    fontWeight="bold"
                               >
                                   Designed by a small team of talented developers.
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
                                        <Avatar sx={{ width: 60, height: 60, mb: 2, bgcolor: green[400] }}>
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
                                        <Avatar sx={{ width: 60, height: 60, mb: 2, bgcolor: blue[400] }}>
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
                                        <Avatar sx={{ width: 60, height: 60, mb: 2, bgcolor: pink[400] }}>
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
           <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
               <Container>
                   <Typography
                        component="h1"
                        variant="h6"
                        align="center"
                        color="success.main"
                        gutterBottom
                    >
                       Development Team
                   </Typography>
                   <Typography
                        component="h1"
                        variant="h4"
                        align="center"
                        color="text.primary"
                        fontWeight="bold"
                        paragraph
                    >
                        Lead Developers
                    </Typography>
                    <Grid container spacing={4} alignItems="center" justifyContent="center">
                        <Grid item xs={12} sm={6} md={3}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardMedia 
                                    component="img"
                                    height="260"
                                    image="/images/jp_ramen.jpg"
                                    alt="portrait"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Jean-Paul Zambrano-Leon
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Front-end Developer
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <IconButton href="https://www.facebook.com/jeanpaul.zambranoleon/">
                                        <Facebook color="success" />
                                    </IconButton>
                                    <IconButton href="https://www.linkedin.com/in/jpzambranoleon/">
                                        <LinkedIn color="success" />
                                    </IconButton>
                                    <IconButton href="https://github.com/jpzambranoleon">
                                        <GitHub color="success" />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardMedia 
                                    component="img"
                                    height="260"
                                    image="/images/zurab_cio.jpg"
                                    alt="portrait"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Zurab Sabakhtarishvili
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Back-end Developer
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <IconButton href="https://www.facebook.com/zurab.sabakhtarishvili">
                                        <Facebook color="success" />
                                    </IconButton>
                                    <IconButton href="https://www.linkedin.com/in/zurab-sabakhtarishvili-33b2731b4/">
                                        <LinkedIn color="success" />
                                    </IconButton>
                                    <IconButton href="https://github.com/ZSabakh">
                                        <GitHub color="success" />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
               </Container>
           </Box>
       </main> 
    )
}