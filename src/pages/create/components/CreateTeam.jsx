import { Groups } from "@mui/icons-material";
import { Avatar, Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material";
import { green } from "@mui/material/colors";

const CreateTeam = () => {
    return (
        <Grid item xs={12} sm={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardActionArea sx={{ height: '100%' }}>
                    <CardContent>
                        <Avatar sx={{ height: '90px', width: '90px', bgcolor: green[400] }}>
                            <Groups fontSize="large" sx={{ height: '50px', width: '50px' }} />
                        </Avatar>
                    </CardContent>
                    <CardContent>
                        <Typography gutterBottom variant="h4">
                            Team
                        </Typography>
                    <Typography variant="body1" align="center" color="text.secondary">
                            Do you have a team and are in need of players?
                            Use this post to let others know that your team is looking
                            for more players to join.
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    ); 
};

export default CreateTeam;