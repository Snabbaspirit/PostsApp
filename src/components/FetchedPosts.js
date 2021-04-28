import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '../redux/actions';
import Post from './Post';

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPosts);
  const isLoading = useSelector(state => state.app.loading)
  console.log('isLoading', isLoading)
  if (isLoading) {
    return <h1>🎲</h1>
  }
  if (!posts.length) {
    return (
    <button
      className="btn btn-primary"
      onClick={() => dispatch(fetchPosts())}
      >Load post
    </button>)
  }
  
  return posts.map(post => <Post post={post} key={post.id}/>)
}