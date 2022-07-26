import * as React from 'react';
import { Groups } from "@mui/icons-material";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { Users } from '../dummyData';


const Post = ({ post }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ mb: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardHeader 
                    avatar={
                        <Avatar sx={{ bgcolor: green[400] }} >
                            <Groups />
                        </Avatar>   
                    }
                    title={Users.filter((u) => u.id === post?.userId)[0].username}
                    subheader={post.date}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" fontSize={20} gutterBottom aria-label="title">
                        {post.title}
                    </Typography>
                    <Typography variant="h7" aria-label="city" paragraph>
                        {post.city}, {post.state}
                    </Typography>
                    <Typography variant="body2" aria-label="description" color="text.secondary">
                        {post.desc}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button component={Link} to="/post" size="small" color="success">View</Button>
                </CardActions>
            </Card>
        </Grid> 
    );
};

export default Post;