import { SportsSoccer } from "@mui/icons-material";
import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@mui/material";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Leone Digitale
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
  }

export default function Login() {
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
                    Sign in to First Squad
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
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel 
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container sx={{ mb: 2 }}>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Paper>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}