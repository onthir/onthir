import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../api';


const CategoryList = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the backend
    const fetchCategories = async () => {
      try {

        const response = await axios.get(`${API_URL}/categories/`);
        setCategories(response.data);  // Set categories if the response is successful
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <h3>Categories</h3>
      <ul>
        <li onClick={() => onSelectCategory(null)}>All</li> {/* Option to view all posts */}
        {categories.map((category) => (
          <li key={category.id} onClick={() => onSelectCategory(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
