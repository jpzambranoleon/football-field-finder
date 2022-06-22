import { Code, Facebook, GitHub, Laptop, LinkedIn, Palette, } from "@mui/icons-material";
import { Avatar, Box, Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, ImageListItem, Typography } from "@mui/material";
import { blue, green, pink } from "@mui/material/colors";

const itemData = [
    {
      img: "/images/team_passing.png",
      title: "team",
    },
];

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
                       <Grid item sx={12} sm={6} xl={6}>
                           <Box>
                               <Typography
                                    component="h1"
                                    variant="h4"
                                    align="left"
                                    color="text.primary"
                                    fontWeight="bold"
                               >
                                   Designed by a small team of talented developers
                               </Typography>
                               <Typography
                                    variant="h6"
                                    align="left"
                                    color="text.secondary"
                                    paragraph
                                >
                                    This web app was created to help people who are interested in the sport of soccer 
                                    to meet up with local teams in the area that are looking for players to join 
                                </Typography>
                                <Grid container spacing={2} align="center">
                                    <Grid item sx={12} sm={4}>
                                        <Avatar sx={{ width: 60, height: 60, mb: 2, bgcolor: green[400] }}>
                                            <Laptop fontSize="large" />
                                        </Avatar>
                                        <Typography 
                                            variant="body1" 
                                            color="text.secondary"
                                        >
                                            Designed to be responsive. Can work on any desktop or mobile device.
                                        </Typography>
                                    </Grid>
                                    <Grid item sx={12} sm={4}>
                                        <Avatar sx={{ width: 60, height: 60, mb: 2, bgcolor: blue[400] }}>
                                            <Palette fontSize="large" />
                                        </Avatar>
                                        <Typography variant="body1" color="text.secondary">
                                            Designed to look sleek and modern. Developed using advance React Frameworks.
                                        </Typography>
                                    </Grid>
                                    <Grid item sx={12} sm={4}>
                                        <Avatar sx={{ width: 60, height: 60, mb: 2, bgcolor: pink[400] }}>
                                            <Code fontSize="large" />
                                        </Avatar>
                                        <Typography variant="body1" color="text.secondary">
                                            Project is open source. The code is available for anyone to see and modify.
                                        </Typography>
                                    </Grid>
                                </Grid>
                           </Box>
                       </Grid>
                       <Grid item xs={12} sm={6}>
                            {itemData.map((item) => (
                                <ImageListItem sx={{ mt: {xl: -13, md: -10} }} key={item.img}>
                                    <img
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
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
                    <Grid container spacing={4} justifyContent='center'>
                        <Grid item xs={12} sm={6} md={4} xl={3}>
                            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                                <CardMedia component="img" height="260" image="/images/jp_ramen.jpg" alt="portrait" />
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
                        <Grid item xs={12} sm={6} md={4} xl={3}>
                            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                                <CardMedia component="img" height="260" image="/images/zura_cio.JPG" alt="zura" />
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