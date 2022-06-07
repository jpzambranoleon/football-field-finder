import { Box, Container, Grid, Typography } from "@mui/material";

export default function About() {
    return (
       <main>
           <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
               <Container>
                   <Grid container spacing={3}>
                       <Grid item sx={12} sm={6}>
                           <Box>
                               <Typography
                                    component="h1"
                                    variant="h7"
                                    align="left"
                               >
                                   This web app was designed and developed by a small team of talented developers.
                               </Typography>
                               <Typography
                                    variant="h6"
                                    align="left"
                                    color="text.secondary"
                                    paragraph
                                >
                                    This web app was created to help people who are interested in the sport of soccer 
                                    to meet up with local teams in the area that are looking for players to join. 
                                    The sport has seen a rapid popularity growth in the United States, and we wanted
                                    to contribute to that growth in our own way.
                                </Typography>
                           </Box>
                       </Grid>
                   </Grid>
               </Container>
           </Box>
       </main> 
    )
}