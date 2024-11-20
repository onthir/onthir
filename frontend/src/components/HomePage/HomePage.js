// src/components/HomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HomePage.css';  // For custom styling
import { fetchPosts } from '../../api';
import { Link } from 'react-router-dom';
import {Button, Space, Typography} from "antd";
import Logo from "../../assets/images/Logo.png"


const HomePage = () => {


  return (
    <div className="home-page">
      <div className="home-container">
        <img
          src={Logo}
          alt="Onthir Logo"
          className="home-logo"
        />
        <h1 className="home-heading">Onthir</h1>
        <p className="home-subheading">
          Empowering Self-Expression and Connection Throught The Art of Creativity and Innovation
        </p>
      </div>
    </div>
  );
};




export default HomePage;
