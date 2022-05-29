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

const theme = createTheme();

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
        <Grid container>
            <Grid item xs={12} sm={8}>
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis eius dicta autem amet molestias eligendi voluptatum aliquam iure, deleniti in, voluptatibus modi ut repudiandae, repellat pariatur quisquam omnis libero numquam!
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