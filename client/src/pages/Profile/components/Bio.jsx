import { LocationOnOutlined, MailOutlineOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Bio = ({ user }) => {
  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Avatar sx={{ width: 270, height: 270 }} />
      </Box>
      <Typography variant="h1" fontSize="22px" fontWeight={600}>
        {user.name}
      </Typography>
      <Typography
        variant="body1"
        fontSize="20px"
        color="text.secondary"
        sx={{ mb: 2 }}
      >
        {user.username}
      </Typography>
      <Typography>{user.bio}</Typography>
      <Button
        component={Link}
        to="/settings/profile"
        fullWidth
        color="primary"
        variant="outlined"
        sx={{ mt: 2 }}
      >
        Edit Profile
      </Button>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 2,
        }}
      >
        <LocationOnOutlined
          color="primary"
          fontSize="small"
          sx={{ mr: 1, ml: -0.5 }}
        />
        <Typography variant="body2">{user.location}</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
        <MailOutlineOutlined
          color="primary"
          fontSize="small"
          sx={{ mr: 1, ml: -0.5 }}
        />
        <Typography variant="body2">{user.email}</Typography>
      </Box>
    </Box>
  );
};

export default Bio;
