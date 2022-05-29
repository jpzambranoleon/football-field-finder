import { Grid, Typography } from "@mui/material";

const AboutDescription = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
                <Typography>
                    This website was created as a project for bringing people closer together. 
                    As an advid football fan, I've often sought out groups of people that enjoy playing the sport. This website is designed to help people who want to find group/groups of advid football fans that love to play the sport.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    The sport of football/soccer is becoming increasingly popular in the United States, so we decided to contribute to the growth in our own way. We designed a website that allows users to post 
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus perferendis iusto magni eius. Ea, ipsum? Saepe accusamus odio rem maiores, ipsa est nostrum ab iure molestias, hic praesentium tempora? 
                </Typography>
            </Grid>
        </Grid>
    )
}

export default AboutDescription;