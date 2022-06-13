import { Menu, SportsSoccer } from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import TempDrawer from "./TempDrawer";

const Navbar = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    return (
        <>
            <TempDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
            <AppBar position="relative" sx={{ bgcolor: 'success.main' }}>
                <Toolbar sx={{ width: { xl: '76%', lg: '90%' }, margin: { xl: '0 auto', lg: '0 auto' }, justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <SportsSoccer fontSize="large" sx= {{ mr: 1 }} />
                        <Typography variant="h5" noWrap>
                            Team Finder
                        </Typography>
                    </Box>
                    <Box>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Button component={Link} to="/" color="inherit">
                                Home
                            </Button>
                            <Button component={Link} to="/about" color="inherit">
                                About
                            </Button>
                        </Box>
                        <IconButton 
                            sx={{ display: { xs: 'flex', sm: 'none' } }}
                            onClick={handleDrawerOpen}
                            color="inherit"
                        >
                            <Menu />
                        </IconButton>
                    </Box>      
                </Toolbar>
            </AppBar>
        </>
    )
};

export default Navbar;