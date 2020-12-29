import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//style
import "./User.css";

const User = ({ user }) => {
  const { id, name, username, email, address, phone, website, company } = user;
  return (
    <div className="user_details ">
      <h2 className="user_name">{name}</h2>
      <Link className="link" to={`/posts/${user.id}`}>Details</Link>
      <p>{username}</p>
      <p>{email}</p>
      <p>Adress:{address.street}</p>

      <p>{phone}</p>
      <p>{website}</p>
      <p>{company.name}</p>

    </div>
  );
};

export default User;
