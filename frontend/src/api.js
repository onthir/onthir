import axios from 'axios';


// const API_URL = process.env.REACT_APP_API_URL;
// console.log("API URL:", API_URL);

// if (process.env.REACT_APP_LOG_LEVEL === "debug") {
//   console.log("Debugging enabled!");
// }


export const API_URL = process.env.REACT_APP_API_URL;

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


