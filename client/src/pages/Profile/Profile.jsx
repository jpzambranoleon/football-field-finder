import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import Feed from "./components/Feed";
import { InfoContext } from "../../utils/InfoProvider";
import Bio from "./components/Bio";

export default function Profile() {
  const { authorizedUser } = useContext(InfoContext);

  return (
    <main>
      <Box sx={{ bgcolor: "background.paper", pt: 4, pb: 6 }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <Bio authorizedUser={authorizedUser} />
            </Grid>
            <Grid item xs={12} sm={9}>
              <Paper>
                <Box p={2}>
                  <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    paragraph
                  >
                    My Posts
                  </Typography>
                  <Grid container spacing={2}>
                    <Feed username={authorizedUser.username} />
                  </Grid>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
