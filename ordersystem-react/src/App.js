import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import TakeOrder from './components/takeOrder';
import Admin from './components/admin'
import Home from './components/home'
import './App.css';

function App() {

  useEffect(() => {

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<TakeOrder />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/home" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
