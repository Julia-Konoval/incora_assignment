import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CommentInfo from "./CommentInfo";
import { Link } from "react-router-dom";
import "./Post.css";


const Post = () => {
  let [info, setInfo]= useState([]);
  const { name, email, body } = info;
  let { post_id } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${post_id}`
        );
        setInfo(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
     <h2 className="title">Comments:</h2>
     <div className="comments">
     {info.map((info) => (
          <CommentInfo info={info} />
        ))}
     <p >{name}</p>
     <p>{email}</p>
     <p>{body}</p>
    </div>
    </div>
  );
};
export default Post;
