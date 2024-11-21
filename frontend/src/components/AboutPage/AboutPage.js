import React from "react";
import "./AboutPage.css";
import { Helmet } from "react-helmet";


const AboutPage = () => {
  return (
    <div className="about-page">
            <Helmet>
      <title>About Us | Onthir</title>
          <meta name="description" content="At Onthir, we are dedicated to fostering meaningful connections and self-expression through the power of creativity and authenticity. Our mission is to provide a platform where individuals can share their stories, explore their emotions, and celebrate their unique journeys." />
      </Helmet>
      <div className="about-container">
        {/* Page Title */}
        <div className="about-header">
          <h1 className="about-title">About Us</h1>
          <p className="about-intro">
            Inspiring Creativity, Empowering Individuals
          </p>
        </div>

        {/* Mission Section */}
        <div className="about-section">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            Our mission is to inspire and empower creative individuals by
            providing innovative platforms and experiences that foster
            self-expression, connection, and artistic growth. We aim to be a
            catalyst for creativity, helping people turn their unique ideas
            into impactful art that resonates and empowers.
          </p>
        </div>

        {/* Vision Section */}
        <div className="about-section">
          <h2 className="section-title">Our Vision</h2>
          <p className="section-text">
            We envision a world where creativity knows no bounds, where every
            individual has the tools, support, and inspiration they need to
            share their unique voice and leave a lasting impact through their
            art.
          </p>
        </div>

        {/* Values Section */}
        <div className="about-section">
          <h2 className="section-title">Our Values</h2>
          <ul className="values-list">
            <li>Fostering Creativity</li>
            <li>Empowering Individuals</li>
            <li>Building Connections</li>
            <li>Encouraging Growth</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
