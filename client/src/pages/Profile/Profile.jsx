import { Box, Container, Grid, Tab, Tabs } from "@mui/material";
import React, { useContext } from "react";
import Feed from "./components/Feed";
import { InfoContext } from "../../utils/InfoProvider";
import Bio from "./components/Bio";

export default function Profile() {
  const { authorizedUser } = useContext(InfoContext);

  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <main>
      <Box sx={{ bgcolor: "background.paper", pt: 4, pb: 6 }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <Bio authorizedUser={authorizedUser} />
            </Grid>
            <Grid item xs={12} sm={9}>
              <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="secondary"
                  aria-label="basic tabs example"
                >
                  <Tab value="one" label="My Posts" />
                </Tabs>
              </Box>
              <Grid container spacing={2}>
                <Feed username={authorizedUser.username} />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
