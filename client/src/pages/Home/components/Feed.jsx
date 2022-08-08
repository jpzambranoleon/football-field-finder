import { Box, Grid, Pagination } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../../../components/Post";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/all");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <Box>
      <Grid container spacing={2}>
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </Grid>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          mt: 2,
        }}
      >
        <Pagination count={10} variant="outlined" color="primary" />
      </Box>
    </Box>
  );
};

export default Feed;
