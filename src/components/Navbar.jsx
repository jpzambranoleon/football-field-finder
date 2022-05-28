import { SportsSoccer } from "@mui/icons-material";
import { AppBar, Toolbar, Typography } from "@mui/material"

const pages = ['Home', 'About'];

const Navbar = () => {

    return (
        <AppBar position="relative">
            <Toolbar>
                <SportsSoccer sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap>
                    Field Finder
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;