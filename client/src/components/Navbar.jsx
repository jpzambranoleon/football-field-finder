import { Menu, SportsSoccer } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { InfoContext } from "../utils/InfoProvider";
import TempDrawer from "./TempDrawer";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { authorized } = useContext(InfoContext);
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=jpzl_12`);
      setUser(res.data);
    };
    fetchUser();
  }, []);

  return (
    <>
      <TempDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <AppBar position="static" sx={{ bgcolor: "success.main" }}>
        <Toolbar
          sx={{
            width: { xl: "76%", lg: "90%" },
            margin: { xl: "0 auto", lg: "0 auto" },
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <SportsSoccer fontSize="large" sx={{ mr: 1 }} />
            <Typography variant="h5" noWrap>
              Team Finder
            </Typography>
          </Box>
          <Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button component={Link} to="/" color="inherit">
                Home
              </Button>
              <Button component={Link} to="/about" color="inherit">
                About
              </Button>
              <Button
                component={Link}
                to={authorized ? `profile/${user.username}` : "/login"}
                color="inherit"
              >
                {authorized ? "Profile" : "Login"}
              </Button>
            </Box>
            <IconButton
              sx={{ display: { xs: "flex", sm: "none" } }}
              onClick={handleDrawerOpen}
              color="inherit"
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
