import * as React from "react";
import { LocationOnOutlined, MailOutlineOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Skeleton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Bio = ({ user, loading }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [loadButton, setLoadButton] = useState(true);

  setTimeout(() => {
    setLoadButton(false);
  }, [1000]);

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        {loading ? (
          <Skeleton
            variant="circular"
            sx={{
              width: { sm: 180, xs: 250, lg: 250 },
              height: { sm: 180, xs: 250, lg: 250 },
            }}
          />
        ) : (
          <Avatar
            src={user.profilePicture}
            sx={{
              width: { sm: 170, xs: 250, lg: 250 },
              height: { sm: 170, xs: 250, lg: 250 },
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
      {currentUser._id === user._id ? (
        <>
          {loadButton ? (
            <Button disabled fullWidth color="primary" variant="outlined">
              <CircularProgress size="25px" />
            </Button>
          ) : (
            <Button
              component={Link}
              to="/settings/profile"
              fullWidth
              color="primary"
              variant="outlined"
              sx={{ textTransform: "none" }}
            >
              Edit profile
            </Button>
          )}
        </>
      ) : (
        <>
          {loadButton ? (
            <Button disabled fullWidth color="primary" variant="outlined">
              <CircularProgress size="25px" />
            </Button>
          ) : (
            <Button
              disabled
              fullWidth
              color="primary"
              variant="outlined"
              sx={{ textTransform: "none" }}
            >
              {" "}
              Follow{" "}
            </Button>
          )}{" "}
        </>
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
