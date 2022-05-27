import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import AdbIcon from '@mui/icons-material/Adb';
import { Menu } from "@mui/icons-material";

const pages = ['Home', 'About'];

const Navbar = () => {

    return (
        <AppBar>
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: 'flex' }}>
                    <AdbIcon sx={{ mr: 1 }} />
                    <Typography>
                        Logo
                    </Typography>
                </Box>


                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                    <Button
                        key={page}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {page}
                    </Button>
                    ))}
                </Box>

                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Button color="inherit">Login</Button>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none'} }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"    
                    >
                        <Menu />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;