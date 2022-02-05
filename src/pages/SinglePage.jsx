import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import {MyButton} from '../components';

export const SinglePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({title: "", body: ""});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [id, setPost])

  return (
    <div>
      {
        post && (
          <div className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <MyButton><Link to={`/posts/${id}/edit`}>Редактировать пост</Link></MyButton>
          </div>
        )
      }
    </div>
  );
};
