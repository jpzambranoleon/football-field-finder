import { Groups, Person, Sports } from "@mui/icons-material";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { blue, green, pink } from "@mui/material/colors";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SimpleTable from "./components/SimpleTable";

export default function ViewPost() {
  const [post, setPost] = useState({});
  const [postType, setPostType] = useState();
  const postId = useParams().postId;

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/posts/${postId}`);
      setPost(res.data);
      if (res.data.types.team === true) {
        return setPostType("Team");
      } else if (res.data.types.player === true) {
        return setPostType("Player");
      } else if (res.data.types.coach === true) {
        return setPostType("Coach");
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
    } else if (postType === "Coach") {
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
      <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
                <PostIcon />
                <Typography variant="h5" fontWeight="bold">
                  {post.title}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" paragraph>
                {post.desc}
              </Typography>
              <SimpleTable post={post} postType={postType} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
