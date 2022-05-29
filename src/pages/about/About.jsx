import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, createTheme, CssBaseline, Grid, Link, Stack, ThemeProvider, Toolbar, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Leone Digitale
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function About() {
  return (
    <>
        <CssBaseline />
        <Navbar />
        <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h4"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    About Project
                </Typography>
            </Container>
        </Box>
        
        <Container maxWidth="100px">
        <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
                <Typography>
                    This website was created as a project for bringing people closer together. 
                    As an advid football fan, I've often sought out groups of people that enjoy playing the sport. This website is designed to help people who want to find group/groups of advid football fans that love to play the sport.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    The sport of football/soccer is becoming increasingly popular in the United States, so we decided to contribute to the growth in our own way. We designed a website that allows users to post 
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus perferendis iusto magni eius. Ea, ipsum? Saepe accusamus odio rem maiores, ipsa est nostrum ab iure molestias, hic praesentium tempora? 
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Card>
                    <CardMedia
                        sx={{ height: '340px' }}
                        component="img" 
                        image="https://source.unsplash.com/random"
                        alt="random"
                    />
                </Card>
            </Grid>
        </Grid>
        </Container>


        {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
            Footer
        </Typography>
        <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
        >
            Something here to give the footer a purpose!
        </Typography>
        <Copyright />
        </Box>
        {/* End footer */}
  </>
  );
}