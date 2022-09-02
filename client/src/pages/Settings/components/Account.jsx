import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { InfoContext } from "../../../utils/InfoProvider";
import DeleteAccountButton from "./DeleteAccountButton";

const Account = () => {
  const { setStatus, authorizedUser } = useContext(InfoContext);
  console.log(authorizedUser);
  const [usernameData, setUsernameData] = useState({
    username: "",
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    newPasswordConfirmed: "",
  });

  const handleChangeUsernameSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`/users/update/username/${authorizedUser._id}`, {
        userId: authorizedUser._id,
        data: usernameData,
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

  const handleChangePasswordSubmit = (event) => {
    event.preventDefault();
    const oldPassword = passwordData.oldPassword;
    const newPassword = passwordData.newPassword;
    const newPasswordConfirmed = passwordData.newPasswordConfirmed;
    axios
      .put(`/users/update/password/${authorizedUser._id}`, {
        userId: authorizedUser._id,
        oldPassword: oldPassword,
        newPassword: newPassword,
        data: newPasswordConfirmed,
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

  const deleteAccount = (event) => {
    event.preventDefault();
    axios
      .delete(`/users/delete/${authorizedUser._id}`, {
        userId: authorizedUser._id,
      })
      .then((res) => {
        setStatus({
          open: true,
          message: res.data.message,
          severity: "success",
        }).catch((err) => {
          let message = err.response ? err.response.data.message : err.message;
          setStatus({ open: true, message: message, severity: "error" });
        });
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
          Change username
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <Typography variant="h7" fontWeight={600}>
            Current username
          </Typography>
          <TextField
            defaultValue={authorizedUser.username}
            disabled
            id="username"
            fullWidth
            multiline
            rows={1}
            size="small"
            sx={{ mb: 2 }}
          />
          <Typography variant="h7" fontWeight={600}>
            New username
          </Typography>
          <TextField
            id="new_username"
            name="new_username"
            fullWidth
            multiline
            rows={1}
            size="small"
            onChange={(e) =>
              setUsernameData((prev) => ({ ...prev, username: e.target.value }))
            }
            sx={{ mb: 2 }}
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        size="small"
        color="success"
        onClick={handleChangeUsernameSubmit}
        sx={{ textTransform: "none", mb: 5 }}
      >
        Change username
      </Button>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
        <Typography variant="h5" gutterBottom>
          Update password
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <Typography variant="h7" fontWeight={600}>
            Old Password
          </Typography>
          <TextField
            fullWidth
            id="password"
            type="password"
            name="password"
            size="small"
            onChange={(e) =>
              setPasswordData((prev) => ({
                ...prev,
                oldPassword: e.target.value,
              }))
            }
            sx={{ mb: 2 }}
          />
          <Typography variant="h7" fontWeight={600}>
            New password
          </Typography>
          <TextField
            fullWidth
            id="new_password"
            type="password"
            name="new_password"
            size="small"
            onChange={(e) =>
              setPasswordData((prev) => ({
                ...prev,
                newPassword: e.target.value,
              }))
            }
            sx={{ mb: 2 }}
          />
          <Typography variant="h7" fontWeight={600}>
            Confirm new password
          </Typography>
          <TextField
            fullWidth
            id="confirm_new_password"
            type="password"
            name="confirm_new_password"
            size="small"
            onChange={(e) =>
              setPasswordData((prev) => ({
                ...prev,
                newPasswordConfirmed: e.target.value,
              }))
            }
            sx={{ mb: 2 }}
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        size="small"
        color="success"
        onClick={handleChangePasswordSubmit}
        sx={{ textTransform: "none", mb: 5 }}
      >
        Update password
      </Button>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
        <Typography variant="h5" gutterBottom color="error">
          Delete account
        </Typography>
      </Box>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Once you delete your account, there is no going back. Please be certain.
      </Typography>
      <DeleteAccountButton />
    </>
  );
};

export default Account;
