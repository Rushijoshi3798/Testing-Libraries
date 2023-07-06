import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [message, setMessage] = useState("");
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPostList();
  }, []);

  const getPostList = async () => {
    const response = await axios.get("http://localhost/api/article-list");
    const data = response.data.data;
    setPost(data);
    setMessage(response.data.name);
  };

  return (
    <div>
      <h1>Login</h1>
      <p data-testid="success">{message}</p>
      <ul>
        {post.map((post) => (
          <li key={post.id} data-testid={post.name}>
            {post.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Login;
