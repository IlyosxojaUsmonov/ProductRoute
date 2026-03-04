import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1 className="home-title">
          Welcome to <span>My Website</span>
        </h1>
        <p className="home-description">
          Zamonaviy va professional React web sahifa. Tezkor, responsive va
          chiroyli dizayn bilan yaratilgan.
        </p>
        <div className="home-buttons">
          <button className="btn primary">Get Started</button>
          <button className="btn secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
