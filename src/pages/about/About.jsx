import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, createTheme, CssBaseline, Grid, Link, Stack, ThemeProvider, Toolbar, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import AboutDescription from "./components/AboutDescription";
import AboutImage from "./components/AboutImage";

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
        <Box sx={{ bgcolor: 'background.paper', pt: 6, pb: 6 }}>
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
            <AboutDescription />
            <AboutImage />
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