import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/about/About";
import Login from "./authorization/Login";
import PostPage from "./pages/post/PostPage";
import Signup from "./authorization/Signup";
import Copyright from "./components/Copyright";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import CreatePost from "./pages/create/CreatePost";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/user" element={<User />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </Router>
      <Copyright />
    </div>
  );
}

export default App;
