import { Person } from "@mui/icons-material";
import { Avatar, Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const CreateFreeAgent = () => {
    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardActionArea>
                <CardContent>
                    <Avatar sx={{ height: '90px', width: '90px', bgcolor: blue[400] }}>
                        <Person fontSize="large" sx={{ height: '50px', width: '50px' }} />
                    </Avatar>
                </CardContent>
                <CardContent>
                    <Typography gutterBottom variant="h4">
                        Team
                    </Typography>
                   <Typography variant="body1" align="center" color="text.secondary">
                        Are you a player lookig for a team to join?
                        Use the Free Agent post to let other teams
                        know that you are looking to join a team.
                   </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    ); 
};

export default CreateFreeAgent;