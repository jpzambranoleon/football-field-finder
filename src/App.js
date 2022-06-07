import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Login from "./authorization/Login";
import PostPage from "./pages/post/PostPage";
import Signup from "./authorization/Signup";
import Copyright from "./components/Copyright";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </Router>
      <Copyright />
    </div>
  );
}

export default App;
