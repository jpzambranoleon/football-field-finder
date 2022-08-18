import { Logout } from "@mui/icons-material";
import {
  Avatar,
  Box,
  CardHeader,
  ClickAwayListener,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { InfoContext } from "../utils/InfoProvider";

const TempDrawer = ({ openDrawer, setOpenDrawer }) => {
  const { authorized, authorizedUser } = useContext(InfoContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <Drawer anchor="left" open={openDrawer} sx={{ display: { sm: "none" } }}>
      <ClickAwayListener onClickAway={handleDrawerClose}>
        <Box sx={{ width: 250, height: "100%" }}>
          <List>
            <ListItem>
              <Typography
                component="h3"
                variant="h5"
                color="primary"
                gutterBottom
              >
                Team Finder
              </Typography>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={handleDrawerClose}
                component={Link}
                to="/"
              >
                <ListItemText>
                  <Typography>Home</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={handleDrawerClose}
                component={Link}
                to="/about"
              >
                <ListItemText>
                  <Typography>About</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={handleDrawerClose}
                component={Link}
                to={authorized ? `/${authorizedUser.username}` : "/login"}
              >
                <ListItemText>
                  <Typography>{authorized ? "Profile" : "Login"}</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
          {!authorized ? null : (
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                width: "100%",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar src={PF + "person/" + authorizedUser.profilePic} />
                }
                action={
                  <IconButton color="primary" onClick={handleLogout}>
                    <Logout />
                  </IconButton>
                }
                title={authorizedUser.name}
                subheader={authorizedUser.username}
              />
            </Box>
          )}
        </Box>
      </ClickAwayListener>
    </Drawer>
  );
};

export default TempDrawer;
