import { Groups } from "@mui/icons-material";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { green } from "@mui/material/colors";

const UserPost = () => {
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
                    <Typography variant="h5">
                        Looking for more players to join our team
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="success">Edit</Button>
                    <Button size="small" color="error">Delete</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default UserPost;