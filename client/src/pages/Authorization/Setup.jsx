import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export default function Setup() {
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
            <Avatar sx={{ width: 200, height: 200 }} />
            <TextField
              size="small"
              margin="normal"
              fullWidth
              name="name"
              id="name"
            />
            <TextField
              size="small"
              margin="normal"
              fullWidth
              name="bio"
              id="bio"
              multiline
              rows={4}
            />
            <TextField
              size="small"
              margin="normal"
              fullWidth
              name="location"
              id="location"
            />
            <Button
              variant="contained"
              fullWidth
              color="success"
              sx={{ mt: 3, textTransform: "none" }}
            >
              Submit
            </Button>
          </Box>
        </Container>
      </Box>
    </main>
  );
}
