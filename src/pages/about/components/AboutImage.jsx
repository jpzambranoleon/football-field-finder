import { Card, CardMedia, Grid } from "@mui/material";

const AboutImage = () => {
    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardMedia
                    sx={{ height: '340px' }}
                    component="img" 
                    image="/images/leone_digitale_group.jpg"
                    alt="group"
                />
            </Card>
        </Grid>
    )
}

export default AboutImage;