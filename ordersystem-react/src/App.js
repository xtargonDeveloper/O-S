import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TakeOrder from './components/takeOrder';
import Admin from './components/admin'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<TakeOrder />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
