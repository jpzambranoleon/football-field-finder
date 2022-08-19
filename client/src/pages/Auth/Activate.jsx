import { Email, LockOutlined, Phone } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import Otp from "../../components/Otp";
import { InfoContext } from "../../utils/InfoProvider";
import MuiPhoneNumber from "mui-phone-number";

export default function Activate() {
  const [requireOtp, setRequireOtp] = useState(false);
  const [sentData, setSentData] = useState({});
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [formData, setFormData] = useState({});
  const { setStatus, setAuthorized } = useContext(InfoContext);
  const [preferredMethod, setPreferredMethod] = useState("email");

  const handleFormChange = () => {
    setFormData({
      ...Object.fromEntries(new FormData(document.getElementById("auth"))),
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    if (requireOtp) {
      axios
        .post("/auth/activate", { ...sentData, code: otp })
        .then((res) => {
          setStatus({
            open: true,
            message: res.data.message,
            severity: "success",
          });
          setLoading(false);
          localStorage.setItem("token", res.data.accessToken);
          setAuthorized(true);
          axios.defaults.headers.common["Authorized"] = res.data.accessToken;
        })
        .catch((err) => {
          setLoading(false);
          let message = err.response ? err.response.data.message : err.message;
          setStatus({ open: true, message: message, severity: "error" });
        });
    } else {
      axios
        .post("/auth/send-otp", { ...formData })
        .then((res) => {
          setSentData(formData);
          setLoading(false);
          setRequireOtp(true);
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
    }
  };

  const handlePreferredMethodChange = (method) => {
    setPreferredMethod(method);
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
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlined />
            </Avatar>
            <Typography gutterBottom component="h1" variant="h5">
              Verification
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign="center"
              fontSize="20px"
            >
              We will send you a <b>One Time Password</b> to your email address
            </Typography>
            <Box
              component="form"
              onSubmit={handleFormSubmit}
              onChange={handleFormChange}
              noValidate
              sx={{ mt: 1 }}
            >
              {requireOtp ? (
                <TextField />
              ) : (
                <>
                  {preferredMethod === "phone" ? (
                    <MuiPhoneNumber
                      disableAreaCodes
                      fullWidth
                      type="text"
                      label="Phone number"
                      name="phone"
                      variant="outlined"
                      defaultCountry={"us"}
                      autoFormat
                      InputProps={{
                        endAdorment: (
                          <IconButton
                            aria-label="Email"
                            color="secondary"
                            onClick={() => handlePreferredMethodChange("email")}
                          >
                            <Email />
                          </IconButton>
                        ),
                      }}
                    />
                  ) : (
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      InputLabelProps={{ shrink: true }}
                      InputProps={{
                        endAdornment: (
                          <IconButton
                            aria-label="Phone"
                            color="secondary"
                            onClick={() => handlePreferredMethodChange("phone")}
                          >
                            <Phone />
                          </IconButton>
                        ),
                      }}
                    />
                  )}
                </>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Get OTP
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </main>
  );
}
