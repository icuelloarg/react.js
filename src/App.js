import logo from './logo.svg';
import './App.css';
import navbar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {navbar}
      </header>
    </div>
  );
}

export default App;
