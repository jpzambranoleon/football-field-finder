import { Box } from "@mui/material";
import Post from "./Post";
import { Posts } from "../../dummyData";

export default function Feed() {
    return (
        <Box>
            {Posts.map((p) => (
                <Post key={p.id} post={p}/>
            ))}
        </Box>
    );
};