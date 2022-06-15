import { Person, Sports } from "@mui/icons-material";
import { Avatar, Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";

const CreateTrainer = () => {
    return (
        <Grid item xs={12} sm={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardActionArea sx={{ height: '100%' }}>
                    <CardContent>
                        <Avatar sx={{ height: '90px', width: '90px', bgcolor: pink[400] }}>
                            <Sports fontSize="large" sx={{ height: '50px', width: '50px' }} />
                        </Avatar>
                    </CardContent>
                    <CardContent>
                        <Typography gutterBottom variant="h4">
                            Trainer
                        </Typography>
                    <Typography variant="body1" align="center" color="text.secondary">
                            Are you a trainer looking to offer coaching?
                            Use this post to let others know that you are 
                            available to offer some classes.
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    ); 
};

export default CreateTrainer;