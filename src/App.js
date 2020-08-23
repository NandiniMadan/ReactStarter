import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavComponent/NavBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Have Happy Start!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Programming!!
        </a>
      </header>
    </div>
  );
}

export default App;
