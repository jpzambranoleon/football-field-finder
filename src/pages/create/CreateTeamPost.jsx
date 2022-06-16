import { Groups } from "@mui/icons-material";
import { Avatar, Container, Paper } from "@mui/material";
import { green } from "@mui/material/colors";

export default function CreateTeamPost() {
    return (
        <main>
            <Container maxWidth="xs">
                <Paper>
                    <Avatar sx={{ bgcolor: green[400] }}>
                        <Groups />
                    </Avatar>
                </Paper>
            </Container>
        </main> 
    )
};