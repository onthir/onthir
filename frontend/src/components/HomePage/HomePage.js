// src/components/HomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HomePage.css';  // For custom styling

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from backend
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/posts/');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="homepage">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="post-content">
            <h1 className="post-title">{post.title}</h1>
            <p className="post-body">
              {post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body}
            </p>
            <a href={`/posts/${post.id}`} className="read-more">Read more</a>
          </div>
          {post.image && (
            <div className="post-image">
            <img src={`http://localhost:8000${post.image}`} alt={post.title} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
