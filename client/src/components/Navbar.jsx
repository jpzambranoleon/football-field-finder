import { MenuTwoTone, SportsSoccer } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { InfoContext } from "../utils/InfoProvider";
import TempDrawer from "./TempDrawer";

const settings = ["Logout"];

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { authorized, authorizedUser } = useContext(InfoContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onContextMenuClick = (action) => {
    setAnchorElUser(null);
    if (action.toLowerCase() === "logout") {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.reload();
    }
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
                to={authorized ? `/${authorizedUser.username}` : "/login"}
              >
                {authorized ? "Profile" : "Login"}
              </Button>
              {!authorized ? null : (
                <IconButton sx={{ ml: 2, p: 0 }} onClick={handleOpenUserMenu}>
                  <Avatar src={PF + "person/" + authorizedUser.profilePic} />
                </IconButton>
              )}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => onContextMenuClick(setting)}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <IconButton
              sx={{ display: { xs: "flex", sm: "none" } }}
              onClick={handleDrawerOpen}
            >
              <MenuTwoTone />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
