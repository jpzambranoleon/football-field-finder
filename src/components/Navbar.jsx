import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import AdbIcon from '@mui/icons-material/Adb';
import { Camera, Menu } from "@mui/icons-material";

const pages = ['Home', 'About'];

const Navbar = () => {

    return (
        <AppBar position="relative">
            <Toolbar>
                <Camera sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap>
                    Album layout
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;