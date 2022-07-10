import { Groups } from "@mui/icons-material";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import SimpleTable from "./components/SimpleTable";
import { Users } from "../../dummyData";
import { Posts } from "../../dummyData";

const PostPage = ({ post }) => {
    return (
        <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
            <Container>
                <Grid container>
                    <Grid item>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 5 }}>
                            <Avatar sx={{ bgcolor: green[400], mr: 2, height: '55px', width: '55px' }} >
                                <Groups fontSize="large" />
                            </Avatar> 
                            <Typography variant="h5" fontWeight="bold">
                                {post.title}
                            </Typography>
                        </Box>
                        <Typography variant="body1" paragraph>
                            {post.desc}
                        </Typography>
                    </Grid>
                    <SimpleTable />
                </Grid>
            </Container>
        </Box>
    );
};

export default function PostPageFeed() {
    return (
        <>
            <PostPage  />
        </>
    );
};