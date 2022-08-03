import { Delete, Edit } from "@mui/icons-material";
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const Bio = ({ authorizedUser }) => {
  return (
    <Paper>
      <Box p={3}>
        <Box sx={{ justifyContent: "center", display: "flex", mb: 2 }}>
          <Avatar sx={{ width: 115, height: 115 }} />
        </Box>
        <Typography align="center" paragraph>
          {authorizedUser.firstName} {authorizedUser.lastName}
        </Typography>
        <Typography align="center">
          Username: {authorizedUser.username}
        </Typography>
        <Typography align="center"> Email: {authorizedUser.email}</Typography>
        <Stack spacing={2} direction="row" sx={{ mt: 3 }}>
          <IconButton color="success">
            <Edit />
          </IconButton>
          <IconButton color="error">
            <Delete />
          </IconButton>
        </Stack>
      </Box>
    </Paper>
  );
};

export default Bio;
