import { Box, Grid, Pagination } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Post from "../../../components/Post";
import { InfoContext } from "../../../utils/InfoProvider";

const MyPosts = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [filterData, setFilterData] = useState({
    page: 1,
  });
  const { setStatus } = useContext(InfoContext);

  useEffect(() => {
    axios
      .get("/posts/my_posts/" + username, { params: filterData })
      .then((res) => {
        setPosts(res.data.posts);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => {
        let message = err.response ? err.response.data.message : err.message;
        setStatus({ open: true, message: message, severity: "error" });
      });
  }, [filterData]);

  {
    /*  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("posts/profile/" + username)
        : await axios.get("posts/profile/");
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]); */
  }

  return (
    <>
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
    </>
  );
};

export default MyPosts;
