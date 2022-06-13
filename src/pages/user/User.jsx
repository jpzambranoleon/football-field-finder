import { Box, Container, Typography } from "@mui/material";
import FreeAgentPost from "../../components/FreeAgentPost";
import TeamPost from "../../components/TeamPost";
import TempPostResponsive from "../../components/TempPostResponsive";
import TrainerPost from "../../components/TrainerPost";
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
                    <TempPostResponsive />
                </Container>
           </Box>
       </main> 
    )
};