import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../../../components/Post";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("posts/profile/" + username)
        : await axios.get("posts/profile/");
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