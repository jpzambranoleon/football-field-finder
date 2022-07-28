import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("posts/myposts/" + username)
        : await axios.get("posts/myposts/");
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <>
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </>
  );
};

export default Feed;
