import React, { useState } from "react";
import "./App.css";

import Portal from "./components/Portal";
import Coal from "./components/Coal";
import Login from "./components/Login";
import { Navigate, Routes, Route } from "react-router-dom";
function App() {
  const Type = localStorage.getItem("Type");

  return (
    <div className="App">
      <div className="wrapper">
          <Routes>
          {Type==='mine' && <Route path="/" exact element={<Coal />} />}
          {Type==='railway' && <Route path="/" exact element={<Portal />} />}
          <Route path="/" element={<Navigate replace to="/login" />} />
          
            {/* <Route path="/coal" element={<Coal/>} />
            <Route path="/portal" element={<Portal/>} /> */}
            <Route path="/login" element={<Login/>} />

          </Routes>
      
      </div>
    </div>
  );
}

export default App;
