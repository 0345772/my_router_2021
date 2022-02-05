import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

export const SinglePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [id])

  return (
    <div>
      {
        post && (
          <div className="post">
            <h3>{post.title}</h3>
            <p>{ post.body}</p>
          </div>
        )
      }
    </div>
  );
};