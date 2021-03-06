import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const BlogPage = () => {
  const [posts, setPosts] = useState([]);

 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <div>
      <h1>Our news</h1>
      <ol style={{display: "flex", flexDirection: "column"}}>
        {
          posts.map(post => (
            <Link key={post.id} to={`/posts/${post.id}`}>
              <li>{post.title}</li>
            </Link>
          ))
        }
      </ol>
    </div>
  );
};
