const { AddPhotoAlternate } = require("@mui/icons-material");
const {
  Box,
  Grid,
  Typography,
  Avatar,
  IconButton,
  TextField,
  Button,
} = require("@mui/material");

const PublicProfile = () => {
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
            <TextField fullWidth size="small" sx={{ mb: 2 }} />
            <Typography variant="h7" fontWeight={600}>
              Bio
            </Typography>
            <TextField fullWidth multiline rows={3} sx={{ mb: 2 }} />
            <Typography variant="h7" fontWeight={600}>
              Location
            </Typography>
            <TextField fullWidth size="small" />
            <Button
              variant="contained"
              size="small"
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
