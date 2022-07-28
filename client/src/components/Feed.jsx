import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post";

const Feed = ({ name }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = name
        ? await axios.get("posts/myposts/" + name)
        : await axios.get("posts/myposts/");
      setPosts(res.data);
    };
    fetchPosts();
  }, [name]);

  return (
    <>
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </>
  );
};

export default Feed;
