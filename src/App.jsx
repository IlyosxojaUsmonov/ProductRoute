import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Faq from "./pages/FAQ/Faq";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Notfound from "./pages/Notfound/Notfound";
import Login from "./auth/Login/Login";
import Register from "./auth/Register/Register";
import { Route, Routes } from "react-router-dom";
import ProdectedRoute from "./auth/ProtectedRoute/ProdectedRoute";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProdectedRoute>
              <Home />
            </ProdectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProdectedRoute>
              <About />
            </ProdectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProdectedRoute>
              <Products />
            </ProdectedRoute>
          }
        />
        <Route
          path="/faq"
          element={
            <ProdectedRoute>
              <Faq />
            </ProdectedRoute>
          }
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
