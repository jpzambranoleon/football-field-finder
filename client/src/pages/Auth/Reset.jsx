import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useCallback, useState } from "react";
import { useContext } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useParams } from "react-router-dom";
import { InfoContext } from "../../utils/InfoProvider";

export default function Reset(props) {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const { setStatus } = useContext(InfoContext);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { token } = useParams();

  const handleFormChange = () => {
    setFormData({
      ...Object.fromEntries(new FormData(document.getElementById("auth"))),
    });
  };

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }
    return executeRecaptcha("yourAction");
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    const captcha = await handleReCaptchaVerify();

    axios
      .post("/auth/rest", { ...formData, token, captcha })
      .then((res) => {
        setLoading(false);
        setStatus({
          open: true,
          message: res.data.message,
          severity: "success",
        });
      })
      .catch((err) => {
        setLoading(false);
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
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Password Reset
            </Typography>
            <Box
              component="form"
              id="auth"
              onSubmit={handleFormSubmit}
              onChange={handleFormChange}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="newPassword"
                type="password"
              />
              {loading ? (
                <CircularProgress />
              ) : (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, textTransform: "none" }}
                >
                  Submit
                </Button>
              )}
            </Box>
          </Box>
        </Container>
      </Box>
    </main>
  );
}
