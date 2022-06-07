import { Box, Link, Typography } from "@mui/material";

const Copyright = () => {
    return (
        <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
            <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                    Leone Digitale
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    )
}

export default Copyright;