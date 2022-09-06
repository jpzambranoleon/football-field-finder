import * as React from "react";
import { LocationOnOutlined, MailOutlineOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Skeleton, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { InfoContext } from "../../../utils/InfoProvider";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Bio = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER_IMAGES_PERSON;
  const { authorizedUser } = useContext(InfoContext);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const { username } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
      setLoading(false);
    };
    fetchUser();
  }, [username]);

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        {loading ? (
          <Skeleton
            variant="circular"
            sx={{
              width: { sm: 180, xs: 270, lg: 270 },
              height: { sm: 180, xs: 270, lg: 270 },
            }}
          />
        ) : (
          <Avatar
            src={PF + user.profilePic}
            sx={{
              width: { sm: 170, xs: 270, lg: 270 },
              height: { sm: 170, xs: 270, lg: 270 },
            }}
          />
        )}
      </Box>
      <Typography variant="h1" fontSize="22px" fontWeight={600}>
        {loading ? <Skeleton /> : user.name}
      </Typography>
      <Typography
        variant="body1"
        fontSize="20px"
        color="text.secondary"
        sx={{ mb: 2 }}
      >
        {loading ? <Skeleton /> : user.username}
      </Typography>
      <Typography sx={{ mb: 2 }}>{user.bio}</Typography>
      {authorizedUser._id === user._id ? (
        <Button
          component={Link}
          to="/settings/profile"
          fullWidth
          color="primary"
          variant="outlined"
          sx={{ textTransform: "none" }}
        >
          Edit Profile
        </Button>
      ) : (
        <Button
          disabled
          fullWidth
          color="primary"
          variant="outlined"
          sx={{ textTransform: "none" }}
        >
          Follow
        </Button>
      )}
      {loading ? (
        <Skeleton sx={{ mt: 2 }} />
      ) : (
        <>
          {" "}
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
                sx={{ mr: 1 }}
              />
              <Typography variant="body2">
                {loading ? <Skeleton /> : user.location}
              </Typography>
            </Box>
          )}
        </>
      )}
      {loading ? (
        <Skeleton />
      ) : (
        <>
          {" "}
          {!user.publicEmail ? null : (
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <MailOutlineOutlined
                color="primary"
                fontSize="small"
                sx={{ mr: 1 }}
              />
              <Typography variant="body2">
                {loading ? <Skeleton /> : user.publicEmail}
              </Typography>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default Bio;
