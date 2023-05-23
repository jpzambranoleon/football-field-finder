import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import CreatePost from "./pages/createPost/CreatePost";
import axios from "axios";
import ViewPost from "./pages/viewPost/ViewPost";
import Profile from "./pages/profile/Profile";
import { useContext } from "react";
import { InfoContext } from "./utils/InfoProvider";
import StickyFooter from "./components/StickyFooter";
import { Box } from "@mui/material";
import Settings from "./pages/settings/Settings";
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Setup from "./pages/auth/Setup";
import Activate from "./pages/auth/Activate";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Forgot from "./pages/auth/Forgot";
import Reset from "./pages/auth/Reset";

function App() {
  axios.defaults.baseURL = "http://localhost:8800/api";

  const { authorized } = useContext(InfoContext);

  return (
    <div className="App">
      <GoogleReCaptchaProvider>
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
                <Route path="/setup" element={<Setup />} />
                <Route path="/register/activate" element={<Activate />} />
                <Route path="/:username" element={<Profile />} />
                <Route path="/password/forgot" element={<Forgot />} />
                <Route path="/password/reset" element={<Reset />} />
                {authorized ? (
                  <>
                    <Route path="/post/create" element={<CreatePost />} />
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
      </GoogleReCaptchaProvider>
    </div>
  );
}

export default App;
