import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, createTheme, CssBaseline, Grid, Link, Stack, ThemeProvider, Toolbar, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import AboutDescription from "./components/AboutDescription";
import AboutImage from "./components/AboutImage";

export default function About() {
  return (
    <>
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
  </>
  );
}