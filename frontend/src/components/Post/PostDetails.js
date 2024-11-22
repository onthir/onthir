// PostDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './PostDetails.module.css';  // Import CSS module
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../api';
import { Comments } from "@hyvor/hyvor-talk-react";



const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();  // For redirecting after deletion
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null); // Retrieve the token stored on login

  useEffect(() => {
    if(localStorage.getItem('access_token') === null){                   
      
  }
  else{
   setToken(localStorage.getItem('access_token')); 
    setLoggedIn(true);
  }
  }, []);

    // Function to delete the post
    const handleDelete = async () => {
      const confirmDelete = window.confirm("Are you sure you want to delete this post?");
      if (confirmDelete) {
        try {
          await axios.delete(`${API_URL}/posts/${id}/`, {
            headers:{
              'Authorization': `Bearer ${token}`
            }
          });
          alert('Post deleted successfully');
          navigate('/');  // Redirect to homepage after deletion
        } catch (error) {
          console.error('Error deleting post:', error);
        }
      }
    };

    // update posts
    const handleUpdate = () => {
      navigate(`/posts/${id}/update`);
    };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${API_URL}/posts/${id}/`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };
    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className={styles.postCard}>
      <h1 className={styles.postTitle}>{post.title}</h1>
      {post.image && (
        <div className={styles.postImage}>
          <img src={`${API_URL}${post.image}`} alt={post.title} />
        </div>
      )}
      <div 
  className="post-details-body" 
        dangerouslySetInnerHTML={{ __html: post.body }} 
      />
{loggedIn && (
  <>
    <button onClick={handleUpdate} className="update-button">Update Post</button>
    <button onClick={handleDelete} className={styles.deleteButton}>Delete Post</button>
  </>
)}
<hr/>

    return <Comments website-id={12206} page-id={1} />;

    </div>
    
  );
};

export default PostDetails;
