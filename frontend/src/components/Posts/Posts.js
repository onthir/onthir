import React, {useEffect, useState} from "react";
import { fetchPosts } from "../../api";

const Post = () => {
const [posts, setPosts] = useState([]);
const [filteredCategory, setFilteredCategory] = useState(null);
const [categories, setCategories] = useState([]);

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


}

export default Post;