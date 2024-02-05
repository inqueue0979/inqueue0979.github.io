import logo from './logo.svg';
import './App.css';
import './output.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <h2 className=' text-blue-700 text-2xl font-bold'>Hello, React!</h2>
        </div>
      </header>
    </div>
  );
}

export default App;
