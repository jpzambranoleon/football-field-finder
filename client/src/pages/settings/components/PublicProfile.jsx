import {
  Box,
  Button,
  Grid,
  Typography,
  Avatar,
  IconButton,
  TextField,
} from "@mui/material";
import { AddPhotoAlternate, Cancel } from "@mui/icons-material";
import { InfoContext } from "../../../utils/InfoProvider";
import { useContext } from "react";
import axios from "axios";
import { useState } from "react";
import { userRequest } from "../../../requestMethods";
import { useSelector } from "react-redux";

const PublicProfile = ({ user }) => {
  const { currentUser } = useSelector((state) => state.user);
  const { setStatus } = useContext(InfoContext);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: currentUser.name,
    publicEmail: currentUser.publicEmail,
    bio: currentUser.bio,
    location: currentUser.location,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(file);

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("image", file);
      formData.profilePic = fileName;

      userRequest.post("/users/upload", data);
    }
    userRequest
      .put(`/users/update/${currentUser._id}`, {
        userId: currentUser._id,
        data: formData,
      })
      .then((res) => {
        setStatus({
          open: true,
          message: res.data.message,
          severity: "success",
        });
        window.location.reload();
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
              defaultValue={currentUser.name}
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
              defaultValue={currentUser.publicEmail}
              id="email"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  publicEmail: e.target.value,
                }))
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
              defaultValue={currentUser.bio}
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
              defaultValue={currentUser.location}
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
              src={currentUser.profilePicture}
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
                  hidden
                  accept=".png, .jpg, .jpeg"
                  type="file"
                  name="image"
                  id="image"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <AddPhotoAlternate fontSize="large" />
              </IconButton>
              {file === null ? null : (
                <IconButton
                  onClick={() => setFile(null)}
                  color="error"
                  sx={{ bottom: 200, left: 95 }}
                >
                  <Cancel fontSize="large" />
                </IconButton>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default PublicProfile;
