import React, { useState } from 'react';
import './Posts.css';
import mb from '../../img/img1-assets/Mobilis_موبيليس_-_panoramio_(1).jpg'
function Posts() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'ADMIN',
      imageUrl: mb,
      description: 'ATM mobilis quartier',
      comments: ['wow', 'ou???']
    },
    {
      id: 2,
      username: 'user2',
      imageUrl: 'https://via.placeholder.com/400x300',
      description: 'This is post 2',
      comments: ['Comment 1']
    }
  ]);

  const handleCommentSubmit = (postId, comment) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
      )
    );
  };

  return (
    <div className="posts-container">
      {posts.map(post => (
        <div className="post" key={post.id}>
          <div className="post-header">
            <span className="username">{post.username}</span>
          </div>
          <div className="post-image">
            <img src={post.imageUrl} alt="Post" />
          </div>
          <div className="post-content">
            <p>{post.description}</p>
            <div className="comments">
              <h3>Comments</h3>
              {post.comments.map((comment, index) => (
                <p key={index}>{comment}</p>
              ))}
              <CommentForm postId={post.id} onCommentSubmit={handleCommentSubmit} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function CommentForm({ postId, onCommentSubmit }) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === '') return;
    onCommentSubmit(postId, comment);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        type="text"
        placeholder="Add a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default Posts;
