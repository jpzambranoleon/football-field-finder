import { Avatar, Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Bio = ({ authorizedUser }) => {
  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Avatar sx={{ width: 270, height: 270 }} />
      </Box>
      <Typography variant="h1" fontSize="22px" fontWeight={600}>
        {authorizedUser.firstName} {authorizedUser.lastName}
      </Typography>
      <Typography
        variant="body1"
        fontSize="20px"
        color="text.secondary"
        sx={{ mb: 2 }}
      >
        {authorizedUser.username}
      </Typography>
      <Typography> Email: {authorizedUser.email}</Typography>
      <Button
        component={Link}
        to="/settings/profile"
        fullWidth
        color="success"
        variant="outlined"
        sx={{ mt: 2 }}
      >
        Edit Profile
      </Button>
    </Box>
  );
};

export default Bio;
