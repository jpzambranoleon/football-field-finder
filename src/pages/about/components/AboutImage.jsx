import { Card, CardMedia, Grid } from "@mui/material";

const AboutImage = () => {
    return (
        <Grid item xs={12} sm={6}>
            <Card>
                <CardMedia
                    sx={{ height: '500px' }}
                    component="img" 
                    image="/images/football_boot_and_ball.jpg"
                    alt="group"
                />
            </Card>
        </Grid>
    )
}

export default AboutImage;