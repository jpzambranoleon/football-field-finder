import { Sports } from "@mui/icons-material";
import { Avatar, Box, Button, Card, CardActionArea, CardContent, Stack, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const UserPost = () => {
    return (
        <Card sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ ml: 2, mt: 2, mb: 2, width: '50px', height: '50px', bgcolor: pink[400], display: { xl: 'flex', md: 'flex', sm: 'flex', xs: 'none' } }} >
                        <Sports fontSize="large"/>
                    </Avatar>
                    <CardContent>
                        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                            3 hrs ago {bull} Trainer name {bull} Hot Springs, AR
                        </Typography>
                        <Typography variant="h5" sx={{ fontSize: 20 }} component="div">
                            Trainer looking to offer some training
                        </Typography>
                    </CardContent>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
                    <Button size="small" color="error">
                        Delete
                    </Button>
                </Box>
            </Box>
        </Card>
    )
}

export default UserPost;