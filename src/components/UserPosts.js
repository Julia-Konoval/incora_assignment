import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserPost from "./UserPost";
import "./UserPost.css";

const UserPosts = () => {
  let { user_id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
        );
        setPosts(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  function handleOnClick() {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", { title: "test" })
      .then((res) => console.log(res));
  }
  return (
    <div className="user_posts_container">
      <h1 className="title">User's Posts</h1>
      <h2>{user_id}</h2>
      <div className="wrap">
      <button onClick={handleOnClick}>Add new</button>
      </div>
      <div className="posts_container">
        {posts.map((post) => (
          <UserPost post={post} />
        ))}
      </div>
    </div>
  );
};
export default UserPosts;
