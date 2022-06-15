import { Groups } from "@mui/icons-material";
import { Avatar, Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material";
import { green } from "@mui/material/colors";

const CreateTeam = () => {
    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardActionArea>
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
                        Do you have a team and are looking for 
                        players to join? Use the team post to
                        post information on your team and how others
                        can find and join.
                   </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    ); 
};

export default CreateTeam;