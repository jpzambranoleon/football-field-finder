import { Box, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Feed from "../components/Feed";

export default function MyPosts() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?name=Jean-Paul Zambrano-Leon`);
      setUser(res.data);
    };
    fetchUser();
  }, []);

  return (
    <main>
      <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
        <Container>
          <Typography component="h1" variant="h4" align="center" gutterBottom>
            Welcome, {user.name}!
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
            <Feed name="Jean-Paul Zambrano-Leon" />
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
