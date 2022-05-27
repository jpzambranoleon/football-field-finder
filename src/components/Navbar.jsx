import { AppBar, Toolbar, Typography } from "@mui/material"
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Home', 'About'];

const Navbar = () => {

    return (
        <AppBar position="relative">
            <Toolbar>
                <AdbIcon sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap>
                    Album layout
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;