import axios from 'axios';

const API_URL = 'http://localhost:8000/';


//function to get categories
export const fetchCategories = async () =>{
    try{
        const response = await axios.get(`${API_URL}/categories/`);
        return response.data;
    }
    catch (error){
        console.error("Error fetching categories: ", error);
        throw error;
    }
}

// function to post categories


// function to get posts
export const fetchPosts = async () => {
    try{
        const response = await axios.get(`${API_URL}/posts/`);
        console.log(response);
        return response.data;
    }
    catch (error){
        console.error('Error fetching posts: ', error);
        throw error;
    }
}