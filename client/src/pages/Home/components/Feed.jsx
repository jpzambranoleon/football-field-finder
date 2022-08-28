import { Directions } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputBase,
  Pagination,
  Paper,
} from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Post from "../../../components/Post";
import { InfoContext } from "../../../utils/InfoProvider";

const Feed = () => {
  const [posts, setPosts] = useState([]);
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
    </>
  );
};

export default Feed;
