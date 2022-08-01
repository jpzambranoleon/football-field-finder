import { Box, Button, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Feed from "../components/Feed";
import { useParams } from "react-router";
import { InfoContext } from "../utils/InfoProvider";

export default function Profile() {
  const { user } = useContext(InfoContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  console.log(user.username);

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
          <Button onClick={handleLogout}>Logout</Button>
        </Container>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={2}>
            <Feed username={user.username} />
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
