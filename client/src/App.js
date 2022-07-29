import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import About from "./pages/About";
import Login from "./authorization/Login";
import Register from "./authorization/Register";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import axios from "axios";
import PostPageFeed from "./pages/PostPageFeed";
import Profile from "./pages/Profile";
import { useContext } from "react";
import { InfoContext } from "./utils/InfoProvider";
import Navbar from "./components/Navbar";
import Copyright from "./components/Copyright";

function App() {
  axios.defaults.baseURL = "http://localhost:8800/api";

  const { authorized } = useContext(InfoContext);

  return (
    <div className="App">
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post" element={<PostPageFeed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {authorized ? (
              <>
                <Route path="/post/create" element={<CreatePost />} />
                <Route path="/profile/:username" element={<Profile />} />
              </>
            ) : null}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Copyright />
        </Router>
      </>
    </div>
  );
}

export default App;
