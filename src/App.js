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
import CreateTeamPost from "./pages/create/CreateTeamPost";
import CreateFreeAgentPost from "./pages/create/CreateFreeAgentPost";
import CreateTrainerPost from "./pages/create/CreateTrainerPost";
import Error404 from "./pages/error404/Error404";

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
          <Route path="/create-team-post" element={<CreateTeamPost />} />
          <Route path="/create-freeAgent-post" element={<CreateFreeAgentPost/>} />
          <Route path="/create-trainer-post" element={<CreateTrainerPost />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Router>
      <Copyright />
    </div>
  );
}

export default App;
