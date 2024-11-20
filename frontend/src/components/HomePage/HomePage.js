import React from "react";
import { Row, Col, Button } from "antd";
import "./HomePage.css";
import Logo from "../../assets/images/Logo.png";
import Info from "../../assets/images/info.jpg";
const HomePage = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="home-banner">
        <div className="home-container">
          <img
            src={Logo}
            alt="Onthir Logo"
            className="home-logo"
          />
          <h1 className="home-heading">Onthir</h1>
          <p className="home-subheading typewriter">
          Empowering Self-Expression and Connection Throught The Art of Creativity and Innovation</p>
        </div>
      </div>

      {/* Info Section */}
      <div className="info-section">
  <div className="parallax-bg"></div>
  <Row gutter={[16, 16]} align="middle" className="info-content">
    <Col xs={24} sm={24} md={12}>
      <img
        src={Info}
        alt="Description"
        className="info-image"
      />
    </Col>
    <Col xs={24} sm={24} md={12}>
      <h2 className="info-heading">Discover Our Mission</h2>
      <p className="info-subheading">
      Our mission is to inspire and empower creative individuals by providing innovative platforms and experiences that foster self-expression, connection, and artistic growth. We aim to be a catalyst for creativity, helping people turn their unique ideas into impactful art that resonates and empowers.
      </p>
      <Button type="primary" className="info-button" href="/about">Learn More</Button>
    </Col>
  </Row>
</div>



    </div>
  );
};

export default HomePage;
