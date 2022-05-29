import { Card, CardMedia, Grid } from "@mui/material";

const AboutImage = () => {
    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardMedia
                    sx={{ height: '340px' }}
                    component="img" 
                    image="https://source.unsplash.com/random"
                    alt="random"
                />
            </Card>
        </Grid>
    )
}

export default AboutImage;