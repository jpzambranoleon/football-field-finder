import {
  Box,
  ClickAwayListener,
  Drawer,
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

  const handleDrawerClose = () => {
    setOpenDrawer(false);
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
                color="success.main"
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
                to={
                  authorized ? `profile/${authorizedUser.username}` : "/login"
                }
              >
                <ListItemText>
                  <Typography>{authorized ? "Profile" : "Login"}</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </ClickAwayListener>
    </Drawer>
  );
};

export default TempDrawer;
