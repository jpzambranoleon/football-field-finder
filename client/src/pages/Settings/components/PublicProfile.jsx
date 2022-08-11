import {
  Box,
  Button,
  Grid,
  Typography,
  Avatar,
  IconButton,
  TextField,
} from "@mui/material";
import { AddPhotoAlternate } from "@mui/icons-material";
import { InfoContext } from "../../../utils/InfoProvider";
import { useContext } from "react";
import axios from "axios";
import { useState } from "react";

const PublicProfile = ({ user }) => {
  const { setStatus, authorizedUser } = useContext(InfoContext);
  const [formData, setFormData] = useState({
    name: `${user.name}`,
    profilePicture: `${user.profilePicture}`,
    email: `${user.email}`,
    bio: `${user.bio}`,
    location: `${user.location}`,
  });

  const [image, setImage] = useState("");

  const handleChange = (e) => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`/users/update/${authorizedUser._id}`, {
        userId: authorizedUser._id,
        data: formData,
      })
      .then((res) => {
        setStatus({
          open: true,
          message: res.data.message,
          severity: "success",
        });
      })
      .catch((err) => {
        let message = err.response ? err.response.data.message : err.message;
        setStatus({ open: true, message: message, severity: "error" });
      });
  };

  return (
    <>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          mb: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Public profile
        </Typography>
      </Box>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={7}>
          <Box component="form">
            <Typography variant="h7" fontWeight={600}>
              Name
            </Typography>
            <TextField
              defaultValue={authorizedUser.name}
              id="name"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              fullWidth
              multiline
              rows={1}
              size="small"
              sx={{ mb: 2 }}
            />
            <Typography variant="h7" fontWeight={600}>
              Public Email
            </Typography>
            <TextField
              defaultValue={authorizedUser.email}
              id="email"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              fullWidth
              multiline
              rows={1}
              size="small"
              sx={{ mb: 2 }}
            />
            <Typography variant="h7" fontWeight={600}>
              Bio
            </Typography>
            <TextField
              defaultValue={authorizedUser.bio}
              id="bio"
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, bio: e.target.value }));
              }}
              fullWidth
              multiline
              rows={3}
              sx={{ mb: 2 }}
            />
            <Typography variant="h7" fontWeight={600}>
              Location
            </Typography>
            <TextField
              defaultValue={authorizedUser.location}
              id="location"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, location: e.target.value }))
              }
              fullWidth
              multiline
              rows={1}
              size="small"
            />
            <Button
              variant="contained"
              size="small"
              color="success"
              onClick={handleSubmit}
              sx={{ textTransform: "none", mt: 3 }}
            >
              Update Profile
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant="body1" fontWeight={600}>
            Profile picture
          </Typography>
          <Box>
            <Avatar
              src={user.profilePicture}
              sx={{ width: 200, height: 200 }}
            />
            <Box sx={{ position: "absolute" }}>
              <IconButton
                variant="contained"
                color="primary"
                sx={{ bottom: 60 }}
                component="label"
              >
                <input
                  accept="image/*"
                  type="file"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      profilePicture: e.target.value,
                    }))
                  }
                />
                <AddPhotoAlternate fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default PublicProfile;
