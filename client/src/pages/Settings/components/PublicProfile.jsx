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

const PublicProfile = ({ user }) => {
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
          <Box>
            <Typography variant="h7" fontWeight={600}>
              Name
            </Typography>
            <TextField
              defaultValue={user.name}
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
              defaultValue={user.bio}
              fullWidth
              multiline
              rows={3}
              sx={{ mb: 2 }}
            />
            <Typography variant="h7" fontWeight={600}>
              Location
            </Typography>
            <TextField
              defaultValue={user.location}
              fullWidth
              multiline
              rows={1}
              size="small"
            />
            <Button
              variant="contained"
              size="small"
              color="success"
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
            <Avatar sx={{ width: 200, height: 200 }} />
            <Box sx={{ position: "absolute" }}>
              <IconButton
                variant="contained"
                color="primary"
                sx={{ bottom: 60 }}
              >
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
