import React from "react";
import LoginPanel from "./components/Login/Login"; // Importing the Login component
import Register from "./components/Register/Register"; // Importing the Register components
import Dealers from "./components/Dealers/Dealers";
import Dealer from "./components/Dealers/Dealer";
import PostReview from "./components/Dealers/PostReview";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dealers" />} />
      {/* Route for the Login page */}
      <Route path="/login" element={<LoginPanel />} />
      {/* Route for the Register page */}
      <Route path="/register" element={<Register />} />
      <Route path="/dealers" element={<Dealers />} />
      <Route path="/dealer/:id" element={<Dealer />} />
      <Route path="/postreview/:id" element={<PostReview />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
export default App;
