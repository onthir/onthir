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
import { Login } from './components/Accounts/Login';
import { Logout } from './components/Accounts/Logout';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:slug" element={<PostDetails />} />  {/* Post details route */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts" element={<PostListComponent />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/create-post" element={<PostForm />} /> {/* Route for PostForm */}
        <Route path="/posts/:slug/update" element={<PostForm isUpdate />} /> {/* Update route */}
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />

        {/* <Route path="/" element={<Navigate to="/login" />} /> */}

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
