import { Groups, Person, Sports } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Container,
  Grid,
  ImageListItem,
  Typography,
} from "@mui/material";
import { blue, green, pink } from "@mui/material/colors";
import Form from "../../components/Form";

const itemData = [
  {
    img: "/images/team_playing.png",
    title: "team",
  },
];

export default function CreatePost() {
  return (
    <main>
      <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item sx={12} sm={6} xl={6}>
              <Box>
                <Typography
                  component="h1"
                  variant="h4"
                  align="center"
                  color="success.main"
                  fontWeight="bold"
                  gutterBottom
                >
                  Create Post
                </Typography>
                <Grid container spacing={2} align="center">
                  <Grid item sx={12} sm={4}>
                    <Typography variant="h5" gutterBottom>
                      Team
                    </Typography>
                    <Avatar
                      sx={{ width: 60, height: 60, mb: 2, bgcolor: green[400] }}
                    >
                      <Groups fontSize="large" />
                    </Avatar>
                    <Typography variant="body1" color="text.secondary">
                      You can create a team or join an existing one in your area
                    </Typography>
                  </Grid>
                  <Grid item sx={12} sm={4}>
                    <Typography variant="h5" gutterBottom>
                      Player
                    </Typography>
                    <Avatar
                      sx={{ width: 60, height: 60, mb: 2, bgcolor: blue[400] }}
                    >
                      <Person fontSize="large" />
                    </Avatar>
                    <Typography variant="body1" color="text.secondary">
                      Teams can recruit players that are looking for a team to
                      join
                    </Typography>
                  </Grid>
                  <Grid item sx={12} sm={4}>
                    <Typography variant="h5" gutterBottom>
                      Trainer
                    </Typography>
                    <Avatar
                      sx={{ width: 60, height: 60, mb: 2, bgcolor: pink[400] }}
                    >
                      <Sports fontSize="large" />
                    </Avatar>
                    <Typography variant="body1" color="text.secondary">
                      If you are experienced, you can offer training services
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    {itemData.map((item) => (
                      <ImageListItem
                        sx={{ mt: { xl: -15, md: -10, sm: -5, xs: -5 } }}
                        key={item.img}
                      >
                        <img
                          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                          alt={item.title}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} xl={6}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
