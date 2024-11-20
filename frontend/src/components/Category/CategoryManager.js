// src/components/CategoryManager.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';
import { API_URL } from '../../api';

const CategoryManager = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories initially
    const fetchCategories = async () => {
      try {

        const response = await axios.get(`${API_URL}/categories/`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryAdded = (newCategory) => {
    setCategories([...categories, newCategory]);  // Add new category to the list
  };

  return (
    <div>
      <h1>Manage Categories</h1>
      <CategoryForm onCategoryAdded={handleCategoryAdded} />
      <CategoryList categories={categories} />
    </div>
  );
};

export default CategoryManager;
