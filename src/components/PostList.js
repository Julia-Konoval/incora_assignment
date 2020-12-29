import React, {useState, useEffect} from 'react';
import axios from "axios";
import Post from "./Post";
import { Link } from "react-router-dom";


function PostList() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchData() {
    
          try {
            const response = await axios.get(
              "https://jsonplaceholder.typicode.com/posts"
            );
            setPosts(response.data);
            console.log(response);
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();
      }, []);

    return (
        <div>
          <h1 className="title">Posts</h1>
          <div className="wrap">
          <button>Add new</button>
          </div>
          <div className="post_container">
            {posts.map((post) => (
              <Post post={post} />
            ))}
          </div>
        </div>
      );
    }

export default PostList;