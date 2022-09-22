import { Groups, Person, Sports } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { blue, green, pink } from "@mui/material/colors";
import axios from "axios";
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InfoContext } from "../../utils/InfoProvider";
import DeletePostButton from "./components/DeletePostButton";
import EditPostButton from "./components/EditPostButton";
import SimpleTable from "./components/SimpleTable";

export default function ViewPost() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const { authorizedUser } = useContext(InfoContext);
  const [postType, setPostType] = useState();
  const postId = useParams().postId;

  useEffect(() => {
    setLoading(true);
    const fetchPost = async () => {
      const res = await axios.get(`/posts/get/${postId}`);
      setPost(res.data);
      setLoading(false);
      if (res.data.types.team === true) {
        return setPostType("Team");
      } else if (res.data.types.player === true) {
        return setPostType("Player");
      } else if (res.data.types.trainer === true) {
        return setPostType("Trainer");
      }
    };
    fetchPost();
  }, [postId]);

  const PostIcon = () => {
    if (postType === "Team") {
      return (
        <Avatar
          sx={{ bgcolor: green[400], mr: 2, height: "55px", width: "55px" }}
        >
          <Groups fontSize="large" />
        </Avatar>
      );
    } else if (postType === "Player") {
      return (
        <Avatar
          sx={{ bgcolor: blue[400], mr: 2, height: "55px", width: "55px" }}
        >
          <Person fontSize="large" />
        </Avatar>
      );
    } else if (postType === "Trainer") {
      return (
        <Avatar
          sx={{ bgcolor: pink[400], mr: 2, height: "55px", width: "55px" }}
        >
          <Sports fontSize="large" />
        </Avatar>
      );
    }
  };

  return (
    <main>
      <Box sx={{ bgcolor: "background.paper", pt: 4, pb: 6 }}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                {loading ? (
                  <Skeleton
                    variant="circular"
                    sx={{ mr: 2, width: "55px", height: "55px" }}
                  />
                ) : (
                  <PostIcon />
                )}
                <Typography variant="h5" fontWeight="bold">
                  {loading ? <Skeleton width="40rem" /> : post.title}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              {loading ? (
                <React.Fragment>
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" width="80%" />
                </React.Fragment>
              ) : (
                <Typography variant="body1" paragraph>
                  {post.desc}
                </Typography>
              )}
              {loading ? (
                <Grid item xs={12} sm={6} md={6}>
                  <Skeleton
                    sx={{ height: 300, mt: 2 }}
                    animation="wave"
                    variant="rectangular"
                  />
                </Grid>
              ) : (
                <SimpleTable post={post} postType={postType} />
              )}
            </Grid>
          </Grid>
          {authorizedUser._id !== post.userId ? null : (
            <Stack spacing={2} direction="row" sx={{ mt: 2 }}>
              <EditPostButton post={post} />
              <DeletePostButton post={post} />
            </Stack>
          )}
        </Container>
      </Box>
    </main>
  );
}
