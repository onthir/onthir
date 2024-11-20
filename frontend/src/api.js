import axios from 'axios';

const API_URL = 'https://onthir-web-54999b26a967.herokuapp.com';


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
export const fetchPosts = async (categoryId=null, categoryName=null) => {
    try{
        let url = `${API_URL}/posts?`;

        if(categoryId){
            url += `category_id=${categoryId}`;
        }
        else if(categoryName){
            url += `category_name=${categoryName}`;
        }

        const response = await axios.get(url);
        console.log(response);
        return response;
    }
    catch (error){
        console.error('Error fetching posts: ', error);
        throw error;
    }
}


