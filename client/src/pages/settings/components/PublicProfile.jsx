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
import { useState } from "react";
import { userRequest } from "../../../requestMethods";
import { useDispatch, useSelector } from "react-redux";
import { updateFailure, updateSuccess } from "../../../redux/userSlice";

const PublicProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { setStatus } = useContext(InfoContext);
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: currentUser.name,
    publicEmail: currentUser.publicEmail,
    bio: currentUser.bio,
    location: currentUser.location,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newFormData = new FormData();
      if (file) {
        newFormData.append("image", file);
      }
      newFormData.append("userId", currentUser._id);
      newFormData.append("data", formData);
      const response = await userRequest.put(
        `/users/update/${currentUser._id}`,
        { userId: currentUser._id, data: formData },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setStatus({
        open: true,
        message: response.data.message,
        severity: "success",
      });
      dispatch(updateSuccess(response.data.user));
    } catch (error) {
      let message = error.response
        ? error.response.data.message
        : error.message;
      setStatus({ open: true, message: message, severity: "error" });
      dispatch(updateFailure());
    }
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
              src={!file ? !currentUser.profilePic : URL.createObjectURL(file)}
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
