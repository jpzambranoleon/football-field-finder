import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Post from "../components/Post";
import api from "../api/server";

export default function User() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("posts/myposts/62df98e664eb28ada61acfcb").then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <main>
      <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
        <Container>
          <Typography component="h1" variant="h4" align="center" gutterBottom>
            Welcome, User!
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
          >
            Let's take a look at the posts that you have.
          </Typography>
        </Container>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={2}>
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
