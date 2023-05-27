import { LibraryAdd } from "@mui/icons-material";
import {
  Avatar,
  Box,
  CircularProgress,
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
import { publicRequest } from "../../requestMethods";

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
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [loadingUser, setLoadingUser] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [filterData, setFilterData] = useState({
    page: 1,
  });
  const { username } = useParams();
  const { setStatus } = useContext(InfoContext);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoadingPosts(true);
      try {
        const response = await publicRequest.get(
          `/posts/userTimeline/${username}`,
          { params: filterData }
        );
        setPosts(response.data.posts);
        setTotalPages(response.data.totalPages);
        setLoadingPosts(false);
      } catch (error) {
        let message = error.response
          ? error.response.data.message
          : error.message;
        setStatus({ open: true, message: message, severity: "error" });
        setLoadingPosts(false);
      }
    };
    fetchPosts();
  }, [setStatus, filterData, username]);

  useEffect(() => {
    const fetchUser = async () => {
      setLoadingUser(true);
      try {
        const res = await publicRequest.get(`/users?username=${username}`);
        setUser(res.data);
        setLoadingUser(false);
      } catch (error) {
        console.log(error);
        setLoadingUser(true);
      }
    };
    fetchUser();
  }, [username]);

  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <main>
      <Box sx={{ bgcolor: "background.paper", pt: 4, pb: 6 }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <Bio user={user} loading={loadingUser} />
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
                  <>
                    {loadingPosts ? (
                      <Box
                        sx={{
                          mt: { sm: 15, xs: "none" },
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <CircularProgress />
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
                        <Typography
                          align="center"
                          variant="h6"
                          color="text.secondary"
                        >
                          There are no posts present in this feed
                        </Typography>
                      </Box>
                    )}
                  </>
                ) : (
                  <>
                    {loadingPosts ? (
                      <Box
                        sx={{
                          mt: { sm: 15, xs: "none" },
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <CircularProgress />
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
              </TabPanel>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
