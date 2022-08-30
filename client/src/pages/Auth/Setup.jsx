import { AddPhotoAlternate } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { InfoContext } from "../../utils/InfoProvider";

export default function Setup() {
  const { setStatus, authorizedUser } = useContext(InfoContext);

  const [file, setFile] = useState(null);

  const [newUser, setNewUser] = useState({
    name: "",
    publicEmail: "",
    bio: "",
    location: "",
  });

  const handleChange = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(file);

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("image", file);
      newUser.profilePic = fileName;

      axios.post("/login", data);
    }
    axios
      .put("/users/set", { userId: authorizedUser._id, data: newUser })
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
    <main>
      <Box sx={{ bgcolor: "background.paper", pt: 4, pb: 6 }}>
        <Container maxWidth="xs">
          <Paper>
            <Box
              sx={{
                justifyContent: "space-between",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" sx={{ mt: 2, mb: 2, ml: 2 }}>
                Setup Profile
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{ mr: 2, mt: 2, mb: 2, textTransform: "none" }}
              >
                Skip
              </Button>
            </Box>
            <Divider />
            <Box
              sx={{
                margin: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box>
                <Avatar sx={{ width: 200, height: 200 }}>
                  {file && (
                    <Avatar
                      sx={{ width: 200, height: 200 }}
                      src={URL.createObjectURL(file)}
                    />
                  )}
                </Avatar>
              </Box>
              <Box sx={{ position: "absolute" }}>
                <IconButton
                  variant="contained"
                  color="primary"
                  sx={{ top: 140, right: 70 }}
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
                <IconButton></IconButton>
              </Box>
              <Box component="form">
                <Typography variant="h7" fontWeight={600}>
                  Name
                </Typography>
                <TextField
                  size="small"
                  fullWidth
                  name="name"
                  id="name"
                  onChange={handleChange}
                />
                <Typography variant="h7" fontWeight={600}>
                  Public Email
                </Typography>
                <TextField
                  size="small"
                  fullWidth
                  name="publicEmail"
                  id="publicEmail"
                  onChange={handleChange}
                />
                <Typography variant="h7" fontWeight={600}>
                  Bio
                </Typography>
                <TextField
                  size="small"
                  fullWidth
                  name="bio"
                  id="bio"
                  multiline
                  rows={4}
                  onChange={handleChange}
                />
                <Typography variant="h7" fontWeight={600}>
                  Location
                </Typography>
                <TextField
                  size="small"
                  fullWidth
                  name="location"
                  id="location"
                  onChange={handleChange}
                />
                <Button
                  variant="contained"
                  fullWidth
                  color="success"
                  type="submit"
                  onClick={handleSubmit}
                  sx={{ mt: 3, textTransform: "none" }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </main>
  );
}
