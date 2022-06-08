import { Person } from "@mui/icons-material";
import { Avatar, Box, Button, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const FreeAgentPost = () => {
    return (
        <Card sx={{ mb: 2 }}>
            <CardActionArea>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ ml: 2, mt: 2, mb: 2, width: '50px', height: '50px', bgcolor: blue[400] }} >
                        <Person fontSize="large"/>
                    </Avatar>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            3 hrs ago {bull} Free agent name {bull} Hot Springs, AR
                        </Typography>
                        <Typography variant="h5" component="div">
                            Free Agent lookig for a team
                        </Typography>
                    </CardContent>
                </Box>
            </CardActionArea>
        </Card>
    )
}

export default FreeAgentPost;