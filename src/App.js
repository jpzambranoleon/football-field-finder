import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import PostPage from "./pages/post/PostPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<PostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
