import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        {/* Text side */}
        <div className="about-text">
          <p className="about-eyebrow">✦ Bizning hikoyamiz</p>
          <h1 className="about-title">
            Grand Luxe <span>Haqida</span>
          </h1>
          <p>
            2005-yilda tashkil etilgan Grand Luxe Hotel — O'zbekistonning eng
            nufuzli mehmonxonalaridan biri. Har bir mehmonimizga uy issiqligini
            his ettirish va unutilmas tajriba yaratish bizning asosiy
            maqsadimizdir.
          </p>
          <p>
            Xonalarimiz zamonaviy dizayn va an'anaviy sharq mehmondo'stligi
            uyg'unligida jihozlangan. Professional jamoamiz 24 soat xizmatda —
            sizning har bir so'rovingiz bajarilishiga tayyormiz.
          </p>

          <div className="about-badges">
            <span className="badge">★ 5-yulduzli mehmonxona</span>
            <span className="badge">✦ ISO sertifikatlangan</span>
            <span className="badge">♦ TripAdvisor Award 2024</span>
          </div>
        </div>

        {/* Divider */}
        <div className="about-divider" />

        {/* Stats side */}
        <div className="about-stats">
          <div className="stat">
            <h2>20+</h2>
            <p>Yillik tajriba</p>
          </div>
          <div className="stat">
            <h2>120+</h2>
            <p>Luxury xonalar</p>
          </div>
          <div className="stat">
            <h2>50K+</h2>
            <p>Mamnun mehmonlar</p>
          </div>
          <div className="stat">
            <h2>4.9★</h2>
            <p>Mijoz bahosi</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
