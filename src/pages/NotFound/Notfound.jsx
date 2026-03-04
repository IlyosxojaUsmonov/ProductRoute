import React from "react";
import { Link } from "react-router-dom";
import "./Notfound.css";

function Notfound() {
  return (
    <section className="notfound">
      <div className="notfound-container">
        <h1 className="error-code">404</h1>
        <h2>Page Not Found</h2>
        <p>
          Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki o‘chirib
          tashlangan.
        </p>

        <Link to="/" className="home-btn">
          Back To Home
        </Link>
      </div>
    </section>
  );
}

export default Notfound;
