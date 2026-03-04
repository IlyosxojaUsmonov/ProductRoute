import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            Biz zamonaviy va professional web ilovalar yaratamiz. Maqsadimiz –
            tezkor, responsive va foydalanuvchi uchun qulay interfeys ishlab
            chiqish.
          </p>

          <p>
            Tajribali jamoamiz React va zamonaviy texnologiyalar yordamida
            yuqori sifatli loyihalarni amalga oshiradi.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat">
            <h2>5+</h2>
            <p>Years Experience</p>
          </div>

          <div className="stat">
            <h2>50+</h2>
            <p>Projects Completed</p>
          </div>

          <div className="stat">
            <h2>100%</h2>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
