// PostDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './PostDetails.module.css';  // Import CSS module
import { useNavigate } from 'react-router-dom';


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
          await axios.delete(`https://onthir-web-54999b26a967.herokuapp.com/posts/${id}/`, {
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
        const response = await axios.get(`https://onthir-web-54999b26a967.herokuapp.com/posts/${id}/`);
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
          <img src={`https://onthir-web-54999b26a967.herokuapp.com${post.image}`} alt={post.title} />
        </div>
      )}
      <div 
  c     lassName="post-details-body" 
        dangerouslySetInnerHTML={{ __html: post.body }} 
      />
{loggedIn && (
  <>
    <button onClick={handleUpdate} className="update-button">Update Post</button>
    <button onClick={handleDelete} className={styles.deleteButton}>Delete Post</button>
  </>
)}
    </div>
    
  );
};

export default PostDetails;
