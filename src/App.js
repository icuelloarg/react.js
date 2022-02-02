import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/NavBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar/>
      </header>
    </div>
  );
}

export default App;
