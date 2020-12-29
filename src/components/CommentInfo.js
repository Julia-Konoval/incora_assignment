import React from 'react';
import "./Post.css";

const CommentInfo = ({info}) => {
    const {name, email, body} = info;
    return (
        <div className="comment_info">
           <h1 className="name">{name}</h1>
           <p>{email}</p> 
           <p>{body}</p> 
        </div>
    )
}
export default CommentInfo;