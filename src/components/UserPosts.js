import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import UserPost from "./UserPost";
import "./UserPosts.css";

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

  // postContent(){
  // }
  return (
    <div className="user_posts_container">
      <h1 className="title">User's Posts</h1>
      <div className="wrap">
        <Link className="button" to="/newpost">
          Add new
        </Link>
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
