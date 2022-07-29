import { Groups } from "@mui/icons-material";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import SimpleTable from "../components/SimpleTable";

export default function PostPageFeed() {
  return (
    <main>
      <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
                <Avatar
                  sx={{
                    bgcolor: green[400],
                    mr: 2,
                    height: "55px",
                    width: "55px",
                  }}
                >
                  <Groups fontSize="large" />
                </Avatar>
                <Typography variant="h5" fontWeight="bold">
                  Need to find a team asap! Looking for a team to join!
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                fuga eaque aperiam vitae numquam ab porro ex suscipit enim
                libero consequatur molestias nemo laborum, velit perferendis
                quia hic consectetur! Voluptatum!
              </Typography>
              <SimpleTable />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
