import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import Feed from "./Feed";

const Bio = ({ authorizedUser }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={3}>
        <Paper>
          <Box sx={{ justifyContent: "center", display: "flex" }}>
            <Avatar sx={{ width: 115, height: 115 }} />
          </Box>
          <Typography align="center">
            {authorizedUser.firstName} {authorizedUser.lastName}
          </Typography>
          <Typography align="center"> Email: {authorizedUser.email}</Typography>
        </Paper>
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
  );
};

export default Bio;
