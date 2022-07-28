import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Login from "./authorization/Login";
import Signup from "./authorization/Signup";
import Copyright from "./components/Copyright";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import CreatePost from "./pages/CreatePost";
import axios from "axios";
import PostPageFeed from "./pages/PostPageFeed";
import MyPosts from "./pages/MyPosts";

function App() {
  axios.defaults.baseURL = "http://localhost:8800/api";
  return (
    <div className="App">
      <>
        <Router>
          <Navbar userId="62df98e664eb28ada61acfcb" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/myposts/:name" element={<MyPosts />} />
            <Route path="/post" element={<PostPageFeed />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </Router>
        <Copyright />
      </>
    </div>
  );
}

export default App;
