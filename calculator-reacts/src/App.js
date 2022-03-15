import logo from './logo.jpeg';
import image from './flagAfrica.png';
import styles from './styles.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
       <nav className='App-nav'><img src={image} className='flagAfrica' alt='African continent containing African flags' />
        <img src={logo} className='App-logo' alt='Calculator logo' /></nav>
      <h1>Quick Maths!</h1>
      </header>

    <div className='calculator-grid'>
      <div className='output'>
      <div className='previous-sum'>123</div>
      <div className='current-sum'>987</div>
      </div>
   
      <button className='span-two'>Clear</button>
      <button>Delete </button>
      <button>÷</button>
      <button>1</button> 
      <button>2</button> 
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className='span-two'>=</button>
    </div>

</div>  
  );
}

export default App;
