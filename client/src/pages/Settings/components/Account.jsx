import { Box, Button, Typography } from "@mui/material";

const Account = () => {
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
      <Button
        variant="contained"
        size="small"
        color="success"
        sx={{ textTransform: "none" }}
      >
        Change username
      </Button>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
        <Typography variant="h5" gutterBottom>
          Change password
        </Typography>
      </Box>
      <Button
        variant="contained"
        size="small"
        color="success"
        sx={{ textTransform: "none" }}
      >
        Change password
      </Button>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
        <Typography variant="h5" gutterBottom color="error">
          Delete User
        </Typography>
      </Box>
      <Button
        color="error"
        variant="contained"
        size="small"
        sx={{ textTransform: "none" }}
      >
        Delete user
      </Button>
    </>
  );
};

export default Account;
