import { Logout, Menu, SportsSoccer } from "@mui/icons-material";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { InfoContext } from "../utils/InfoProvider";
import TempDrawer from "./TempDrawer";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { authorized, authorizedUser } = useContext(InfoContext);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <>
      <TempDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <Box component="header" p={1.5} sx={{ bgcolor: "background.paper" }}>
        <Box
          sx={{
            width: { xl: "76%", lg: "90%" },
            margin: { xl: "0 auto", lg: "0 auto" },
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <SportsSoccer fontSize="large" color="primary" sx={{ mr: 1 }} />
            <Typography variant="h5" noWrap color="primary">
              Team Finder
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                alignItems: "center",
              }}
            >
              <Stack spacing={2} direction="row">
                <Button
                  component={Link}
                  to="/"
                  variant="outlined"
                  color="primary"
                  size="small"
                  sx={{ borderRadius: 5 }}
                >
                  Home
                </Button>
                <Button
                  component={Link}
                  to="/about"
                  variant="outlined"
                  color="primary"
                  size="small"
                  sx={{ borderRadius: 5 }}
                >
                  About
                </Button>
                <Button
                  component={Link}
                  to={
                    authorized ? `profile/${authorizedUser.username}` : "/login"
                  }
                  variant="outlined"
                  color="primary"
                  size="small"
                  sx={{ borderRadius: 5 }}
                >
                  {authorized ? "Profile" : "Login"}
                </Button>
                {!authorized ? null : (
                  <IconButton
                    sx={{ ml: 2 }}
                    onClick={handleLogout}
                    color="primary"
                    size="small"
                  >
                    <Logout fontSize="small" />
                  </IconButton>
                )}
              </Stack>
            </Box>
            <IconButton
              sx={{ display: { xs: "flex", sm: "none" } }}
              onClick={handleDrawerOpen}
              color="primary"
            >
              <Menu />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
