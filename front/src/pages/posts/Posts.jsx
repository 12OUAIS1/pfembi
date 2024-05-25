import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Posts.css';
import mb from '../../img/img1-assets/Mobilis_موبيليس_-_panoramio_(1).jpg';
import Navbar from '../../components/nav/Navbar';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  // Assuming you have a way to get the authenticated user's ID
  const userId = 'user_id_here'; // Replace this with the actual user ID

  const handleCommentSubmit = async (postId, comment) => {
    try {
      const response = await axios.post('http://localhost:1000/api/v6/sendcomment', {
        
        comment: comment,
       
      });
      const newComment = response.data;
      setComments(prevComments => [...prevComments, newComment]);
      setCommentInput(''); // Clear comment input after submission
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:1000/api/v5/allposts');
        const { posts, message } = response.data;
        if (posts && posts.length > 0) {
          setPosts(posts);
        } else {
          console.log(message);
        }
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:1000/api/v6/getcomment');
        const { comments, message } = response.data;
        if (comments && comments.length > 0) {
          setComments(comments);
        } else {
          console.log(message);
        }
      } catch (error) {
        console.error('Failed to fetch comments:', error);
      }
    };

    fetchPosts();
    fetchComments();
  }, []);

  return (
   <>
   <Navbar/>
    <div className="posts-container">
      {posts.map(post => (
        <div className="post" key={post._id}>
          <div className="post-header">
            <span className="username">{post.title}</span>
          </div>
          <div className="post-image">
            <img src={post.imgUrl} alt="Post" />
          </div>
          <div className="post-content">
            <p>{post.description}</p>
            <div className="comments">
              <h3>Comments</h3>
              {comments.filter(comment => comment.post._id === post._id).map((comment, index) => (
                <p key={index}>{comment.comment}</p>
              ))}
              <CommentForm postId={post._id} onCommentSubmit={handleCommentSubmit} commentInput={commentInput} setCommentInput={setCommentInput} />
            </div>
          </div>
        </div>
      ))}
    </div>
   </>
  );
}

function CommentForm({ postId, onCommentSubmit, commentInput, setCommentInput }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentInput.trim() === '') return;
    onCommentSubmit(postId, commentInput);
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        type="text"
        placeholder="Add a comment"
        value={commentInput}
        onChange={(e) => setCommentInput(e.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default Posts;
