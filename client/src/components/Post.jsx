import * as React from "react";
import { Groups, Person, Sports } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Link,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { blue, green, pink } from "@mui/material/colors";
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import convertTime from "../utils/convertTime";

const Post = ({ post }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
      setLoading(false);
    };
    fetchUser();
  }, [post.userId]);

  function fetchTypes(post) {
    if (post.types.team === true) {
      return "Team";
    } else if (post.types.player === true) {
      return "Player";
    } else if (post.types.trainer === true) {
      return "Trainer";
    }
  }

  const postType = fetchTypes(post);

  const PostIcon = () => {
    if (postType === "Team") {
      return (
        <Avatar sx={{ bgcolor: green[400] }}>
          <Groups />
        </Avatar>
      );
    } else if (postType === "Player") {
      return (
        <Avatar sx={{ bgcolor: blue[400] }}>
          <Person />
        </Avatar>
      );
    } else if (postType === "Trainer") {
      return (
        <Avatar sx={{ bgcolor: pink[400] }}>
          <Sports />
        </Avatar>
      );
    }
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          mb: 2,
          height: 325,
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
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
              <PostIcon />
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
              <Link href={user.username} underline="none" color="inherit">
                {user.username}
              </Link>
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
          <Typography variant="h7" fontSize={18} paragraph aria-label="type">
            {loading ? <Skeleton /> : `Type: ${postType}`}
          </Typography>
          <Typography variant="h7" fontSize={13} aria-label="city" paragraph>
            {loading ? <Skeleton /> : post.city},{" "}
            {loading ? <Skeleton /> : post.state}
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
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "5",
                WebkitBoxOrient: "vertical",
              }}
            >
              {post.desc}
            </Typography>
          )}
        </CardContent>
        {loading ? null : (
          <CardActions>
            <Link
              href={`/post/view/${post._id}`}
              underline="none"
              color="inerit"
            >
              <Button size="small" color="primary">
                View
              </Button>
            </Link>
          </CardActions>
        )}
      </Card>
    </Grid>
  );
};

export default Post;
