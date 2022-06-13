import { Groups } from "@mui/icons-material";
import { Avatar, Box, Card, CardActionArea, CardContent, CardHeader, Typography } from "@mui/material";
import { green } from "@mui/material/colors";

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const TeamPost2 = () => {
    return (
        <Card sx={{ mb: 2 }}>
            <CardActionArea>
                <CardHeader 
                    avatar={
                        <Avatar sx={{ bgcolor: green[400] }} >
                            <Groups fontSize="large"/>
                        </Avatar>   
                    }

                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="div">
                        Players Needed
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default TeamPost2;