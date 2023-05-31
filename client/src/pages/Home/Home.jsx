import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Feed from "./components/Feed";
import { useSelector } from "react-redux";

export default function Home() {
  const { currentUser } = useSelector((state) => state.user);
  // reminder to updated this file to look modern
  return (
    <main>
      <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="primary"
            gutterBottom
          >
            Team Finder
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Looking for some people to play football with? Are you looking for a
            team to join? We can help you with that. Find a team near you!
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("filter").offsetTop,
                  behavior: "smooth",
                })
              }
            >
              Find a Post
            </Button>
            <Button
              component={Link}
              to={currentUser ? "/post/create" : "/register"}
              variant="outlined"
              color="primary"
            >
              Create a Post
            </Button>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Feed />
      </Container>
    </main>
  );
}
