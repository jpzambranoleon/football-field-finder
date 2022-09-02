import { Laptop } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Pagination,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "../../components/Post";
import { InfoContext } from "../../utils/InfoProvider";
import Bio from "./components/Bio";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export default function Profile() {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [filterData, setFilterData] = useState({
    page: 1,
  });
  const { username } = useParams();
  const { setStatus } = useContext(InfoContext);

  useEffect(() => {
    const fetchPosts = async () => {
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
    };
    fetchPosts();
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [setStatus, filterData, username]);

  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(posts);

  return (
    <main>
      <Box sx={{ bgcolor: "background.paper", pt: 4, pb: 6 }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <Bio user={user} />
            </Grid>
            <Grid item xs={12} sm={9}>
              <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="secondary"
                  aria-label="basic tabs example"
                >
                  <Tab
                    value="one"
                    label="Posts"
                    sx={{ textTransform: "none" }}
                  />
                </Tabs>
              </Box>
              <TabPanel>
                {posts.length === 0 ? (
                  <Box>
                    <Typography>No Posts</Typography>
                    <Avatar
                      sx={{ width: 60, height: 60, mb: 2, bgcolor: blue[50] }}
                    >
                      <Laptop color="primary" />
                    </Avatar>
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
              </TabPanel>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
