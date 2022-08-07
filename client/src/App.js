import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import About from "./pages/About/About";
import Login from "./authorization/Login";
import Register from "./authorization/Register";
import Home from "./pages/Home/Home";
import CreatePost from "./pages/CreatePost/CreatePost";
import axios from "axios";
import ViewPost from "./pages/ViewPost/ViewPost";
import Profile from "./pages/Profile/Profile";
import { useContext } from "react";
import { InfoContext } from "./utils/InfoProvider";
import StickyFooter from "./components/StickyFooter";
import { Box } from "@mui/material";
import Settings from "./pages/Settings/Settings";
import Navbar from "./components/Navbar";

function App() {
  axios.defaults.baseURL = "http://localhost:8800/api";

  const { authorized } = useContext(InfoContext);

  return (
    <div className="App">
      <>
        <Router>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/post/view/:postId" element={<ViewPost />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {authorized ? (
                <>
                  <Route path="/post/create" element={<CreatePost />} />
                  <Route path="/profile/:username" element={<Profile />} />
                  <Route
                    path="/settings"
                    element={<Navigate to="/settings/profile" />}
                  />
                  <Route path="/settings/:page" element={<Settings />} />
                </>
              ) : null}
            </Routes>
            <StickyFooter />
          </Box>
        </Router>
      </>
    </div>
  );
}

export default App;
