import { MenuTwoTone, SportsSoccer } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Skeleton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import TempDrawer from "./TempDrawer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const settings = ["Logout"];

const Navbar = () => {
  const { currentUser, loading } = useSelector((state) => state.user);
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER_IMAGES_PERSON;

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
    if (action.toLowerCase() === "profile") {
      console.log("profile");
    } else if (action.toLowerCase() === "logout") {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/");
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
            <Box sx={{ ml: 2, display: { xs: "none", sm: "block" } }}>
              <Button component={Link} to="/">
                Home
              </Button>
              <Button component={Link} to="/about">
                About
              </Button>
            </Box>
          </Box>
          <Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {!currentUser ? (
                <Button component={Link} to={"/login"}>
                  Login
                </Button>
              ) : (
                <IconButton sx={{ ml: 2, p: 0 }} onClick={handleOpenUserMenu}>
                  {loading ? (
                    <Skeleton variant="circular" width={35} height={35} />
                  ) : (
                    <Avatar
                      sx={{ height: 35, width: 35 }}
                      src={currentUser.profilePicture}
                    />
                  )}
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
                <MenuItem
                  component={Link}
                  to={`/${currentUser.username}`}
                  onClick={handleCloseUserMenu}
                >
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
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
