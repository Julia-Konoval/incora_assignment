import React from "react";
import "./UserPost.css";
import { Link } from "react-router-dom";

const UserPost = ({ post }) => {
  const {id, userId, title, body } = post;
  return (
    <div className="user_post">
      <h1 className="post_title">{title}</h1>
      <p>{body}</p>
      <p>userId: {userId}</p>
      <Link to={`/info/${post.id}`}> Info </Link>
    </div>
  );
};
export default UserPost;