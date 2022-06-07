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
                                    variant="h3"
                                    align="center"
                                    color="success.main"
                               >
                                   About
                               </Typography>
                           </Box>
                       </Grid>
                   </Grid>
               </Container>
           </Box>
       </main> 
    )
}