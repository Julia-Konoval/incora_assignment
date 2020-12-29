import React from "react";
import "./Post.css";
import axios from "axios";

const CommentInfo = ({ comments, deleteComment }) => {
  const { id, name, email, body } = comments;
  function handleEdit() {}
  function handleDelete() {
    deleteComment(id);
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
      });
  }
  return (
    <div className="comment_info">
      <h1 className="name">{name}</h1>
      <p>{email}</p>
      <p>{body}</p>
      <div className="buttons">
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};
export default CommentInfo;
