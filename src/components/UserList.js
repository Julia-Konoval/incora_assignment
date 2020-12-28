import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";
import {Link} from "react-router-dom";
//style
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let results = [];

      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="title">Current Users</h1>
      <Link>Posts</Link>
      <div className="user_container">
        {users.map((user) => (
          <User user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
