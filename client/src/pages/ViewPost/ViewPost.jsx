import { Groups } from "@mui/icons-material";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SimpleTable from "./components/SimpleTable";

export default function ViewPost() {
  const [post, setPost] = useState({});
  const postId = useParams().postId;

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/posts/${postId}`);
      setPost(res.data);
      console.log(res.data);
    };
    fetchPost();
  }, [postId]);

  return (
    <main>
      <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
                <Avatar
                  sx={{
                    bgcolor: green[400],
                    mr: 2,
                    height: "55px",
                    width: "55px",
                  }}
                >
                  <Groups fontSize="large" />
                </Avatar>
                <Typography variant="h5" fontWeight="bold">
                  {post.title}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" paragraph>
                {post.desc}
              </Typography>
              <SimpleTable post={post} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
