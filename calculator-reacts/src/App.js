import logo from './logo.jpeg';
import image from './flagAfrica.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <nav><img src={image} className="flagAfrica" alt="African continent containing African flags" /></nav>
        <img src={logo} className="App-logo" alt="Calculator logo" />
      <h1>Quick Maths!</h1>
      </header>
    </div>
  );
}

export default App;
