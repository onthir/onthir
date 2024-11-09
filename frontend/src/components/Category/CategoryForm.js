// src/components/CategoryForm.js
import React, { useState } from 'react';
import axios from 'axios';

const CategoryForm = ({ onCategoryAdded }) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/categories/', { name });
      onCategoryAdded(response.data);  // Callback to update the category list after adding
      setName('');  // Reset the form
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Category Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Category</button>
    </form>
  );
};

export default CategoryForm;
