// src/components/HomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HomePage.css';  // For custom styling
import { fetchPosts } from '../../api';
import { Link } from 'react-router-dom';
import {Button, Space, Typography} from "antd";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  const {Text, Link}  = Typography;

  useEffect(() => {
    // Fetch blog posts from backend
    const fetchBlogPosts = async () => {
      try {
        const response = await fetchPosts(filteredCategory);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchBlogPosts();
  }, [filteredCategory]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/categories'); // Adjust the endpoint to match your API
        setCategories(response.data); // Assume response data is an array of category objects
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryName) => {
    setFilteredCategory(categoryName);
  };

  return (
    <div className="homepage">
      <div className="categories-box">
        {categories.map((category) => (
          <a 
          onClick={() => handleCategoryClick(category.id)}
          className="category-button">
            {category.name}
          </a>
        ))}
      </div>

      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="post-content">
            <h1 className="post-title">{post.title}</h1>

            <div 
  className="post-body" 
  dangerouslySetInnerHTML={{
    __html: post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body
  }} 
/>


            <Link href={`/posts/${post.id}`} className="read-more">Read more</Link>
            {post.category && (
            <div
              className="category-link"
              onClick={() => handleCategoryClick(post.category.id)}
            >
              <Button  variant='outlined' color='danger'>{post.category.name}</Button> {/* Render the category name */}
            </div>
          )}
          </div>
          {post.image && (
            <div className="post-image">
              <img src={`http://localhost:8000${post.image}`} alt={post.title} />
            </div>
          )}

        </div>
      ))}
      {filteredCategory && (
        <div className="filtered-category">
          <Button color="default" variant="dashed"  onClick={() => setFilteredCategory(null)}>
            Clear Filter
          </Button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
