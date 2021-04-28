import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';

const Posts = ({syncPosts}) => {
  console.log('syncPosts', syncPosts)
  if (!syncPosts.length) {
    return <h2>No posts yet</h2>
  }
  return syncPosts.map(post => <Post post={post} key={post.id}/>)
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    syncPosts: state.posts.posts
  }
}

export default connect(mapStateToProps, null)(Posts)