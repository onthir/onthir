import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryList = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the backend
    const fetchCategories = async () => {
      try {
        const headers = {
          'Access-Control-Allow-Origin': '*',
        }
        const response = await axios.get('https://onthir-web-54999b26a967.herokuapp.com/categories/', {headers : headers});
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
