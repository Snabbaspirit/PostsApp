import React from 'react';

export default ({post}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{post.title}</h3>
      </div>
    </div>
  )
}