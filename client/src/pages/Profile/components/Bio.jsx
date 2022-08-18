import { LocationOnOutlined, MailOutlineOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { InfoContext } from "../../../utils/InfoProvider";

const Bio = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { authorizedUser } = useContext(InfoContext);

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Avatar
          src={PF + "person/" + user.profilePic}
          sx={{ width: 270, height: 270 }}
        />
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
      <Typography sx={{ mb: 2 }}>{user.bio}</Typography>
      {authorizedUser._id === user._id ? (
        <Button
          component={Link}
          to="/settings/profile"
          fullWidth
          color="primary"
          variant="outlined"
        >
          Edit Profile
        </Button>
      ) : (
        <Button fullWidth color="primary" variant="outlined">
          Follow
        </Button>
      )}
      {!user.location ? null : (
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
      )}
      {!user.email ? null : (
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <MailOutlineOutlined
            color="primary"
            fontSize="small"
            sx={{ mr: 1, ml: -0.5 }}
          />
          <Typography variant="body2">{user.email}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default Bio;
