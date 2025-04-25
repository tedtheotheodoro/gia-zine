import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // ✅ Caminho correto

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-content">
        <h1>GIA: <span>NOT A MOODBOARD</span></h1>
        <p className="home-sub">A digital zine about erasure, beauty & resistance</p>
        <Link to="/origem" className="enter-button">Enter Zine</Link>
      </div>
    </div>
  );
};

export default Home;
