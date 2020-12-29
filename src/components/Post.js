import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { userId, title, body } = post;
  return (
    <div>
      <h1 >{title}</h1>
      <p>{body}</p>
      <p>userId: {userId}</p>

    </div>
  );
};
export default Post;
