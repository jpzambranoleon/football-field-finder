import { Box, Container, Grid, Typography } from "@mui/material";
import TempPostResponsive from "../../components/TempPostResponsive";
import UserPost from "./components/UserPost";

export default function User() {
    return (
       <main>
           <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
                <Container>
                    <Typography
                        component="h1"
                        variant="h4"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                       Welcome Back, User!
                   </Typography>
                   <Typography
                        variant="h6"
                        align="center"
                        color="text.secondary"
                        paragraph
                    >
                        Let's take a look at the posts that you have. 
                    </Typography>
                </Container>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={2}>
                        <UserPost />
                        <UserPost />
                        <UserPost />
                        <UserPost />
                    </Grid>
                </Container>
           </Box>
       </main> 
    )
};