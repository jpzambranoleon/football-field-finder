import { Box, Container, Grid, Typography } from "@mui/material";
import Feed from "../components/Feed";

export default function MyPosts() {
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
            <Feed name="Jean-Paul Zambrano-Leon" />
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
