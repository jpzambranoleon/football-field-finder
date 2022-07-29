import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Login from "./authorization/Login";
import Signup from "./authorization/Signup";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
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
            <Route path="/create" element={<CreatePost />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/*" element={<Error404 />} />
            {authorized ? <></> : null}
          </Routes>
          <Copyright />
        </Router>
      </>
    </div>
  );
}

export default App;
