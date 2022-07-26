import { Box, Container, Grid, Typography } from "@mui/material";
import UserPost from "./components/UserPost";
import { Posts } from "../../dummyData";
import Post from "../../components/Post";
import { useEffect, useState } from "react";
import axios from "axios";

export default function User() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const res = axios.get("post/");
    console.log(res);
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
            {Posts.map((p) => (
              <Post key={p.id} post={p} />
            ))}
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
