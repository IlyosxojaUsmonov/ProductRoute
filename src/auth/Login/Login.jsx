import React, { useState } from "react";
import "./Login.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "ilyos" && password === "0000") {
      toast.success("Login successful! 🎉");
      localStorage.setItem("acses_token", "Ilyosxoja");

      setError("");
      setPassword("");
      setUsername("");
      if (typeof setIsAuthenticated === "function") setIsAuthenticated(true);
      navigate("/home");
    } else {
      setError("Username yoki password notogri ❌");
    }
  };

  return (
    <section className="login">
      <ToastContainer />
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
