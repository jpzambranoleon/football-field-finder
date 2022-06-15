import { Box, Grid, Typography } from "@mui/material";

export default function PostPage() {
    return (
       <main>
           <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
                <Grid container>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography>
                            Looking for a team to play with
                        </Typography>
                    </Grid>
                </Grid>
           </Box>
       </main> 
    )
};