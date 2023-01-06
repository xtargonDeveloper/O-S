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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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
