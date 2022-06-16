import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Error404() {
    const navigate = useNavigate();
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
                                <Typography variant="h6" align="left" color="text.secondary">
                                    Oops! Looks like you followed a bad link or the page hasn't been set up yet.
                                </Typography>
                                <Typography variant="h6" align="left" color="text.secondary" paragraph>
                                    {/*If you think this is a problem with us, please tell us */}
                                </Typography>
                                <Button 
                                    onClick={() => navigate("/")} 
                                    variant="contained" 
                                    size="large" 
                                    color="success" 
                                    sx={{ mt: 1 }}
                                >
                                    Back home
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container> 
            </Box>
        </main>
    );
}