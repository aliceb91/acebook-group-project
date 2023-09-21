import React, { useEffect, useState } from 'react';
import Post from '../post/Post'

const Feed = ({ navigate, posts, logout }) => {
  
    return(
      <>
        <h2>Posts</h2>
          <button onClick={logout}>
            Logout
          </button>
        <div id='feed' role="feed">
            {posts.map(
              (post) => ( <Post post={ post } key={ post._id } /> )
            )}
        </div>
      </>
    )
}

export default Feed;
