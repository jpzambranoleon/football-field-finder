import { Box, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Feed from "../components/Feed";
import { useParams } from "react-router";

export default function Profile() {
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <main>
      <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
        <Container>
          <Typography component="h1" variant="h4" align="center" gutterBottom>
            Welcome, {user.username}!
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
            <Feed username={username} />
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
