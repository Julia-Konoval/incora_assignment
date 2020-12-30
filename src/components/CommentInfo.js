import React, { useState, useRef } from "react";
import "./Post.css";
import axios from "axios";

const CommentInfo = ({ comments, deleteComment }) => {
  const { id, name, email, body } = comments;
  const [textEditor, setTextEditor] = useState(false);
  const bodyRef = useRef();
  const editTextRef = useRef();

  function handleEdit() {
    setTextEditor(true);
  }

  function handleSubmit() {
    bodyRef.current.innerText = editTextRef.current.value;
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        body: bodyRef.current.innerText,
      })
      .then((res) => console.log(res));
    setTextEditor(false);
  }
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
      <p ref={bodyRef}>{body}</p>
      <div className="buttons">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      {textEditor && (
        <div>
          <h4>Enter new text</h4>
          <input type="text" ref={editTextRef} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};
export default CommentInfo;
