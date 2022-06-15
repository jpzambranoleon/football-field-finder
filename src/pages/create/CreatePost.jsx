import { Box, Container, Grid, Typography } from "@mui/material";
import CreateTeam from "./components/CreateTeam";

export default function CreatePost() {
    return (
       <main>
           <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Create A Post
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Use the buttons below to create a post
                    </Typography>
                </Container>
           </Box>
           <Container>
                <Grid container spacing={5} align='center'>
                    <CreateTeam />
                    <CreateTeam />
                    <CreateTeam />
                </Grid>
           </Container>
       </main> 
    )
};