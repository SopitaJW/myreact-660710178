//import logo from './logo.svg';
import logo from './sukku.png'; 
import './App.css';
import Hello from './Hello';
import GOODBYE from './goodbye';
import JSXExamples from './components/JSXExamples';


function App() {
  return (
    <div className="App">
      <Hello />
      <JSXExamples/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          my <code>son_sukku</code> my love.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <GOODBYE />
    </div>
  );
}

export default App;
