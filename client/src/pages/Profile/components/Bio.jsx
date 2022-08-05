import { Avatar, Box, Button, Paper, Typography } from "@mui/material";

const Bio = ({ authorizedUser }) => {
  return (
    <Paper>
      <Box p={3}>
        <Box sx={{ justifyContent: "center", display: "flex", mb: 2 }}>
          <Avatar sx={{ width: 115, height: 115 }} />
        </Box>
        <Typography align="center" paragraph>
          {authorizedUser.firstName} {authorizedUser.lastName}
        </Typography>
        <Typography align="center">
          Username: {authorizedUser.username}
        </Typography>
        <Typography align="center"> Email: {authorizedUser.email}</Typography>
        <Button fullWidth color="success" variant="outlined" sx={{ mt: 3 }}>
          Edit Profile
        </Button>
      </Box>
    </Paper>
  );
};

export default Bio;
