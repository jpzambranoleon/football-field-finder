import { Logout, Menu, SportsSoccer } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { InfoContext } from "../utils/InfoProvider";
import TempDrawer from "./TempDrawer";

const Navbar = () => {
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
      <AppBar
        position="static"
        sx={{
          bgcolor: "background.paper",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Toolbar
          sx={{
            width: { xl: "76%", lg: "90%" },
            margin: { xl: "0 auto", lg: "0 auto" },
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <SportsSoccer fontSize="large" color="primary" sx={{ mr: 1 }} />
            <Typography color="primary" variant="h5" noWrap>
              Team Finder
            </Typography>
          </Box>
          <Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button component={Link} to="/">
                Home
              </Button>
              <Button component={Link} to="/about">
                About
              </Button>
              <Button
                component={Link}
                to={
                  authorized ? `profile/${authorizedUser.username}` : "/login"
                }
              >
                {authorized ? "Profile" : "Login"}
              </Button>
              {!authorized ? null : (
                <IconButton
                  color="primary"
                  sx={{ ml: 2 }}
                  onClick={handleLogout}
                >
                  <Logout />
                </IconButton>
              )}
            </Box>
            <IconButton
              sx={{ display: { xs: "flex", sm: "none" } }}
              onClick={handleDrawerOpen}
            >
              <Menu />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
