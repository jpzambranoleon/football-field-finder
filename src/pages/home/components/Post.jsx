import { Groups } from "@mui/icons-material";
import { Avatar, Box, Button, Card, CardActionArea, CardContent, Typography } from "@mui/material";

const Post = () => {

    return (
        <Card sx={{ mb: 2 }}>
            <CardActionArea>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ ml: 2, mt: 2, mb: 2, width: '50px', height: '50px' }} >
                        <Groups fontSize="large"/>
                    </Avatar>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                            Players Needed
                        </Typography>
                    </CardContent>
                </Box>
            </CardActionArea>
        </Card>
    )
}

export default Post;