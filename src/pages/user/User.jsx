import { Box, Container, Typography } from "@mui/material";

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
                        align="left"
                        color="text.secondary"
                        paragraph
                    >
                        Let's take a look at the posts you have. 
                    </Typography>
               </Container>
           </Box>
       </main> 
    )
};