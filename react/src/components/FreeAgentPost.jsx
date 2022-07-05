import { Person } from "@mui/icons-material";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const FreeAgentPost = () => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ mb: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardHeader 
                    avatar={
                        <Avatar sx={{ bgcolor: blue[400] }} >
                            <Person />
                        </Avatar>   
                    }
                    title="Player Name"
                    subheader="September 14, 2016"

                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h7" aria-label="city" paragraph>
                        Little Rock, AR
                    </Typography>
                    <Typography variant="body2" aria-label="description" color="text.secondary">
                        I'm looking for a team to play with.
                        If you are in a team or know of a team that
                        is looking for players, please contact me.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="success">View</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default FreeAgentPost;