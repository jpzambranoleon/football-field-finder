import {
  Avatar,
  Box,
  Button,
  Container,
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

      console.log(data);

      axios.post("/upload", data);
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography>Setup</Typography>
            <Avatar sx={{ width: 200, height: 200 }}>
              {file && (
                <Avatar
                  sx={{ width: 200, height: 200 }}
                  src={URL.createObjectURL(file)}
                />
              )}
            </Avatar>
            <Box component="form">
              <input
                accept=".png, .jpg, .jpeg"
                type="file"
                name="image"
                id="image"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <TextField
                size="small"
                margin="normal"
                fullWidth
                name="name"
                id="name"
                onChange={handleChange}
              />
              <TextField
                size="small"
                margin="normal"
                fullWidth
                name="publicEmail"
                id="publicEmail"
                onChange={handleChange}
              />
              <TextField
                size="small"
                margin="normal"
                fullWidth
                name="bio"
                id="bio"
                multiline
                rows={4}
                onChange={handleChange}
              />
              <TextField
                size="small"
                margin="normal"
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
        </Container>
      </Box>
    </main>
  );
}
