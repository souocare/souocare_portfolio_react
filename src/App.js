import logo from './logo.svg';
import './App.css';
import React from 'react';
import Landing from './components/Landing';
import Home from './routes/Home';

function App() {
  return (
    <div className="App">
      <Landing></Landing>
      <Home />
    </div>
  );
}

export default App;
