import { Sports } from "@mui/icons-material";
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";

const TempPostResponsive = () => {
    return (
        <Card sx={{ mb: 2 }}>
            <CardHeader 
                avatar={
                    <Avatar sx={{ ml: 2, mt: 2, mb: 2, width: '50px', height: '50px', bgcolor: pink[400] }}>
                        <Sports fontSize="large"/>
                    </Avatar>
                }
                subheader="date"
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="div">
                    Trainer looking to offer some training
                </Typography>
            </CardContent>
            <CardActions>
                <Button>
                    Edit
                </Button>
            </CardActions>
        </Card>
    )
}

export default TempPostResponsive;