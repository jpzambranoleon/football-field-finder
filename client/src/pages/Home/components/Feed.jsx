import { Box, Grid, Pagination } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Post from "../../../components/Post";
import { InfoContext } from "../../../utils/InfoProvider";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [filterData, setFilterData] = useState({
    page: 1,
  });
  const { setStatus } = useContext(InfoContext);

  useEffect(() => {
    axios
      .get("/posts/get_all", { params: filterData })
      .then((res) => {
        setPosts(res.data.posts);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => {
        let message = err.response ? err.response.data.message : err.message;
        setStatus({ open: true, message: message, severity: "error" });
      });
  }, [filterData, setStatus]);

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
        <Pagination
          count={totalPages}
          onChange={(_, page) => {
            setFilterData((prevState) => ({
              ...prevState,
              page: page,
            }));
          }}
          variant="outlined"
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default Feed;
