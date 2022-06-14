import { Groups } from "@mui/icons-material";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { green } from "@mui/material/colors";

const TeamPost = () => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ mb: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardHeader 
                    avatar={
                        <Avatar sx={{ bgcolor: green[400] }} >
                            <Groups />
                        </Avatar>   
                    }
                    title="Team Name FC"
                    subheader="September 14, 2016"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h7" aria-label="city" paragraph>
                        Hot Springs, AR
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Our team is looking for more players.
                        We play every Saturday at Lakeside Park between
                        3:30 to 6:00.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="success">Share</Button>
                    <Button size="small" color="success">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default TeamPost;