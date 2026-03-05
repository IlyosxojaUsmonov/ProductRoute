import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home-overlay" />

      <div className="home-content">
        <p className="home-eyebrow">✦ Toshkent, O'zbekiston</p>
        <h1 className="home-title">
          Xush Kelibsiz <span>Grand Luxe</span> ga
        </h1>
        <p className="home-description">
          Hashamat va tinchlik uyg'unlashgan joyda o'zingizni uyingizday his
          eting. Har bir daqiqangiz unutilmas xotiraga aylansin.
        </p>
        <div className="home-buttons">
          <button className="btn primary" onClick={() => navigate("/booking")}>
            Xona Bron Qilish
          </button>
          <button className="btn secondary" onClick={() => navigate("/rooms")}>
            Xonalarni Ko'rish
          </button>
        </div>

        <div className="home-stats">
          <div className="stat">
            <span className="stat-number">120+</span>
            <span className="stat-label">Luxury Rooms</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">5★</span>
            <span className="stat-label">Star Hotel</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Concierge</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
