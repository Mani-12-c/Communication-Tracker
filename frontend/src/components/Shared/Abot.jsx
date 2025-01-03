import React from "react";
import "../../styles/about.css";
import Footer from "./Footer";
import aboutimg from '../../images/about.jpg'

function About() {
  return (
    <>
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to our platform! We aim to bridge the gap between businesses and their audiences by providing seamless communication solutions.
        </p>
        <p>
          Our mission is to empower companies with tools that enhance their outreach and maintain meaningful connections with their clients and stakeholders.
        </p>
        <p>
          With an intuitive interface, robust features, and a focus on user experience, we ensure that communication tasks become more organized and efficient.
        </p>
        <p>
          Join us in making communication smarter, easier, and more impactful!
        </p>
      </div>
      <div className="about-image">
        <img
          src={aboutimg}
          alt="Teamwork Illustration"
        />
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default About;
