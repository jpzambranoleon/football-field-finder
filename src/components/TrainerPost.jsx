import { Sports } from "@mui/icons-material";
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";

const TrainerPost = () => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ mb: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardHeader 
                    avatar={
                        <Avatar sx={{ bgcolor: pink[400] }} >
                            <Sports />
                        </Avatar>   
                    }
                    title="Trainer Name"
                    subheader="September 14, 2016"

                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" color="text.secondary">
                        Soccer trainer looking to offer some classes
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

export default TrainerPost;