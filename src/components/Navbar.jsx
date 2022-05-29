import { SportsSoccer } from "@mui/icons-material";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"

const pages = ['Home', 'About'];

const Navbar = () => {

    return (
        <AppBar position="relative">
            <Toolbar sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ alignItems: 'center', display: 'flex'}}>
                    <SportsSoccer sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Team Finder
                    </Typography>
                    <Box
                        sx={{ ml: 5, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{ color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Box>
                <Box sx={{ alignItems: 'center' }}>
                    <Button color="inherit">
                        EN
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;