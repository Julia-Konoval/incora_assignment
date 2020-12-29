import React from "react";
import "./UserPost.css";

const UserPost = ({ post }) => {
  const { userId, title, body } = post;
  return (
    <div className="user_post">
      <h1 className="post_title">{title}</h1>
      <p>{body}</p>
      <p>userId: {userId}</p>
    </div>
  );
};
export default UserPost;