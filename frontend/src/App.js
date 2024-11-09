// App.js
import React from 'react';
import Navbar from './components/NavBar/Navbar';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import PostListComponent from './components/PostListComponent';
import ContactPage from './components/ContactPage/ContactPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostDetails from './components/Post/PostDetails';
import PostForm from './components/Post/PostForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<PostDetails />} />  {/* Post details route */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts" element={<PostListComponent />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/create-post" element={<PostForm />} /> {/* Route for PostForm */}
        <Route path="/posts/:id/update" element={<PostForm isUpdate />} /> {/* Update route */}


      </Routes>
    </Router>
  );
}

export default App;
