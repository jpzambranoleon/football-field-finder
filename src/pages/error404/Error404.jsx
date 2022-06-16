import { Box, Container, Grid } from "@mui/material";

export default function Error404() {
    return (
        <main>
            <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item>
                            <Box sx={{ pt: { xl: 15 } }}>
                                <Typography component="h1" variant="h1" align="left" color="text.primary">
                                    404
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container> 
            </Box>
        </main>
    );
}