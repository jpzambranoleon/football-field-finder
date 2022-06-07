import { SportsSoccer } from "@mui/icons-material";
import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@mui/material";

export default function Signup() {
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{ 
                    mt: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Avatar sx={{ mb: 3, bgcolor: 'secondary.main', width: 56, height: 56 }} size="large">
                    <SportsSoccer fontSize="large"/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
            </Box>
            <Paper>
                <Container>
                    <Box
                        sx={{ 
                            mt: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <Box component="form">
                            <TextField 
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoFocus
                            />
                            <TextField 
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="Email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                            <Grid item xs={12}>
                                <FormControlLabel 
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive notifications and updates via email."
                                    sx={{ mt: 1 }}
                                />
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Paper>
        </Container>
    );
}