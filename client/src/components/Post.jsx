import * as React from "react";
import { Groups } from "@mui/icons-material";
import PropTypes from "prop-types";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import convertTime from "../utils/convertTime";

const Post = ({ post }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  Post.propTypes = {
    loading: PropTypes.bool,
  };

  useEffect(() => {
    axios.get(`users/${post.userId}`).then((res) => {
      setUser(res.data);
    });
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{ mb: 2, height: "100%", display: "flex", flexDirection: "column" }}
      >
        <CardHeader
          avatar={
            loading ? (
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
            ) : (
              <Avatar sx={{ bgcolor: green[400] }}>
                <Groups />
              </Avatar>
            )
          }
          title={
            loading ? (
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            ) : (
              user.name
            )
          }
          subheader={
            loading ? (
              <Skeleton animation="wave" height={10} width="40%" />
            ) : (
              convertTime(post.createdAt)
            )
          }
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            fontSize={20}
            gutterBottom
            aria-label="title"
          >
            {loading ? <Skeleton /> : post.title}
          </Typography>
          <Typography variant="h7" aria-label="city" paragraph>
            {loading ? <Skeleton /> : "Hot Springs, AR"}
          </Typography>
          {loading ? (
            <React.Fragment>
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
              />
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation="wave" height={10} width="40%" />
            </React.Fragment>
          ) : (
            <Typography
              variant="body2"
              aria-label="description"
              color="text.secondary"
            >
              {post.desc}
            </Typography>
          )}
        </CardContent>
        {loading ? null : (
          <CardActions>
            <Button component={Link} to="/post" size="small" color="success">
              View
            </Button>
          </CardActions>
        )}
      </Card>
    </Grid>
  );
};

export default Post;
