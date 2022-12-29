import logo from './logo.svg';
import TakeOrder from './components/takeOrder';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TakeOrder />
      </header>
    </div>
  );
}

export default App;
