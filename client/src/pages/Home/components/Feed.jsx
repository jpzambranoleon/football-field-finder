import { Directions, LibraryAdd } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Checkbox,
  CircularProgress,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputBase,
  Pagination,
  Paper,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Post from "../../../components/Post";
import { InfoContext } from "../../../utils/InfoProvider";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [filterData, setFilterData] = useState({
    page: 1,
    team: true,
    trainer: true,
    player: true,
    name: "",
  });
  const { setStatus } = useContext(InfoContext);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/posts/get_all", { params: filterData })
      .then((res) => {
        setPosts(res.data.posts);
        setTotalPages(res.data.totalPages);
        setLoading(false);
      })
      .catch((err) => {
        let message = err.response ? err.response.data.message : err.message;
        setStatus({ open: true, message: message, severity: "error" });
      });
  }, [filterData, setStatus]);

  return (
    <>
      <Paper
        component="form"
        id="filter"
        sx={{
          p: "2px 4px",
          display: { xs: "block", md: "flex" },
          alignItems: "center",
          mb: 5,
        }}
      >
        <FormControl component="fieldset" sx={{ ml: 1 }}>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="end"
              control={
                <Checkbox
                  checked={filterData.team}
                  onChange={(e) => {
                    setFilterData({ ...filterData, team: e.target.checked });
                  }}
                  color="primary"
                />
              }
              label="Team"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={
                <Checkbox
                  checked={filterData.trainer}
                  onChange={(e) => {
                    setFilterData({ ...filterData, trainer: e.target.checked });
                  }}
                  color="primary"
                />
              }
              label="Trainer"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={
                <Checkbox
                  checked={filterData.player}
                  onChange={(e) => {
                    setFilterData({ ...filterData, player: e.target.checked });
                  }}
                  color="primary"
                />
              }
              label="Player"
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            onChange={(e) => {
              setFilterData({ ...filterData, name: e.target.value });
            }}
            inputProps={{ "aria-label": "search" }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            type="submit"
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
          >
            <Directions color="primary" />
          </IconButton>
        </Box>
      </Paper>
      <Box>
        {posts.length === 0 ? (
          <>
            {loading ? (
              <Box
                sx={{
                  mt: { sm: 15, xs: "none" },
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CircularProgress size="140px" />
              </Box>
            ) : (
              <Box sx={{ mt: { sm: 10, xs: "none" } }}>
                <Typography variant="h4" align="center" gutterBottom>
                  Wow, such empty!
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Avatar
                    sx={{
                      width: 150,
                      height: 150,
                      bgcolor: blue[50],
                      mb: 2,
                    }}
                  >
                    <LibraryAdd
                      color="primary"
                      sx={{ width: 50, height: 50 }}
                    />
                  </Avatar>
                </Box>
                <Typography align="center" variant="h6" color="text.secondary">
                  Create a post to see it appear in your post feed
                </Typography>
              </Box>
            )}
          </>
        ) : (
          <>
            {loading ? (
              <Box
                sx={{
                  mt: { sm: 15, xs: "none" },
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CircularProgress size="140px" />
              </Box>
            ) : (
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
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default Feed;
