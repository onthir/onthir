// src/components/PostForm.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RichTextEditor from '../RichTextEditor';
import axios from 'axios';
import './PostForm.css';

const PostForm = ({ isUpdate }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setContent] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [image, setImage] = useState(null); // Base64 string if using image
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/categories/');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const fetchPost = async () => {
      if (isUpdate && id) {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/posts/${id}/`);
          const { title, body, category, image } = response.data;
          setTitle(title);
          setContent(body);
          setSelectedCategory(category);
          setImage(image); // Set base64 string if backend requires it
        } catch (error) {
          console.error('Error fetching post data:', error);
        }
      }
    };

    fetchCategories();
    fetchPost();
  }, [isUpdate, id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(e.target.files);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(e.target.files[0]);
        setImage(reader.result); // Set base64-encoded image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('body', body);
    formData.append('category', selectedCategory);
    if (image) formData.append('image', image); // Append image file if selected


    try {
      if (isUpdate) {
        await axios.put(`http://127.0.0.1:8000/posts/${id}/`, formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        alert('Post updated successfully');
      } else {
        await axios.post('http://127.0.0.1:8000/posts/', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        alert('Post created successfully');
      }
      navigate('/');
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  return (
    <div className="post-form">
      <h1>{isUpdate ? 'Update Post' : 'Create a New Post'}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>

        <label>
          Content:
          <RichTextEditor value={body} onChange={setContent} />
        </label>

        <label>
          Category:
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} required>
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>

        <button type="submit">{isUpdate ? 'Update Post' : 'Create Post'}</button>
      </form>
    </div>
  );
};

export default PostForm;
