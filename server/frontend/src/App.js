import React from "react";
import LoginPanel from "./components/Login/Login"; // Importing the Login component
import Register from "./components/Register/Register"; // Importing the Register components
import Dealers from './components/Dealers/Dealers';
import Dealer from './components/Dealers/Dealer';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
        {/* Route for the Login page */}
        <Route path="/login" element={<LoginPanel />} />
        {/* Route for the Register page */}
        <Route path="/register" element={<Register />} />
        <Route path="/dealers" element={<Dealers/>} />
        <Route path="/dealer/:id" element={<Dealer/>} />
    </Routes>
  );
}
export default App;
