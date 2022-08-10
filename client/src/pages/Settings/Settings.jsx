import {
  Avatar,
  Box,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { InfoContext } from "../../utils/InfoProvider";
import Account from "./components/Account";
import PublicProfile from "./components/PublicProfile";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export default function Settings() {
  const { authorizedUser } = useContext(InfoContext);

  const { page } = useParams();

  const tabNameToIndex = {
    0: "profile",
    1: "account",
    profile: 0,
    account: 1,
  };

  const [selectedTab, setSelectedTab] = useState(tabNameToIndex[page]);

  console.log(selectedTab);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <main>
      <Box sx={{ bgcolor: "background.paper", pt: 6, pb: 6 }}>
        <Container>
          <Box sx={{ display: "flex" }}>
            <Avatar sx={{ width: 56, height: 56 }} />
            <Box sx={{ ml: 2 }}>
              <Typography variant="h6" fontWeight={500}>
                {authorizedUser.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Your personal account
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={8}>
              <Grid item xs={12} sm={3}>
                <Tabs
                  orientation="vertical"
                  value={selectedTab}
                  onChange={handleChange}
                  sx={{
                    borderRight: 1,
                    borderColor: "divider",
                  }}
                >
                  <Tab
                    label="Public profile"
                    component={Link}
                    to="/settings/profile"
                    index={0}
                    sx={{ textTransform: "none" }}
                  />
                  <Tab
                    label="Account"
                    component={Link}
                    to="/settings/account"
                    index={1}
                    sx={{ textTransform: "none" }}
                  />
                </Tabs>
              </Grid>
              <Grid item xs={12} sm={9}>
                <TabPanel value={selectedTab} index={0}>
                  <PublicProfile user={authorizedUser} />
                </TabPanel>
                <TabPanel value={selectedTab} index={1}>
                  <Account />
                </TabPanel>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </main>
  );
}
