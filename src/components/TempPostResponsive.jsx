import { Sports } from "@mui/icons-material";
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";

const TempPostResponsive = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4} >
                <Card sx={{ mb: 2, height: "100%", display: "flex", flexDirection: "column" }}>
                    <CardHeader 
                        avatar={
                            <Avatar sx={{ bgcolor: pink[400] }}>
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
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
                <Card sx={{ mb: 2, height: "100%", display: "flex", flexDirection: "column" }}>
                    <CardHeader 
                        avatar={
                            <Avatar sx={{ bgcolor: pink[400] }}>
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
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
                <Card sx={{ mb: 2, height: "100%", display: "flex", flexDirection: "column" }}>
                    <CardHeader 
                        avatar={
                            <Avatar sx={{ bgcolor: pink[400] }}>
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
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
                <Card sx={{ mb: 2, height: "100%", display: "flex", flexDirection: "column" }}>
                    <CardHeader 
                        avatar={
                            <Avatar sx={{ bgcolor: pink[400] }}>
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
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
                <Card sx={{ mb: 2, height: "100%", display: "flex", flexDirection: "column" }}>
                    <CardHeader 
                        avatar={
                            <Avatar sx={{ bgcolor: pink[400] }}>
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
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
                <Card sx={{ mb: 2, height: "100%", display: "flex", flexDirection: "column" }}>
                    <CardHeader 
                        avatar={
                            <Avatar sx={{ bgcolor: pink[400] }}>
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
            </Grid>
        </Grid>
    )
}

export default TempPostResponsive;