import React from 'react';
import {useParams} from 'react-router-dom';

export const EditPost = () => {
  const {id} = useParams()
  return (
    <div>
      <h6>Edit Post {id}</h6>
    </div>
  );
};
