import React from 'react';
import Post from './Post';

export default ({posts}) => {
  if (!posts.length) {
    return <h2>No posts yet</h2>
  }
  return posts.map(post => <Post post={post} key={post}/>)
}