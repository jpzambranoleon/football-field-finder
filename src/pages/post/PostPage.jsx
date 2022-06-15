import { Groups } from "@mui/icons-material";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import SimpleTable from "./components/SimpleTable";

export default function PostPage() {
    return (
       <main>
           <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
                <Container>
                    <Grid container>
                        <Grid item>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Avatar sx={{ bgcolor: green[400], mr: 2, height: '50px', width: '50px' }} >
                                    <Groups fontSize="large" />
                                </Avatar> 
                                <Typography variant="h4" fontWeight="bold">
                                    Looking for a team to play with 
                                </Typography>
                            </Box>
                            <Typography paragraph>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, exercitationem maxime suscipit corrupti recusandae voluptate sapiente est a. Eos itaque deleniti possimus blanditiis cupiditate alias doloremque rem in quidem? Esse!
                            </Typography>
                        </Grid>
                        <SimpleTable />
                    </Grid>
                </Container>
           </Box>
       </main> 
    )
};