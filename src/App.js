import React from 'react';
import { Routes, Route, Link } from 'react-router';
import './App.css';
import Header from './components/header/header';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={"Resultados"} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
