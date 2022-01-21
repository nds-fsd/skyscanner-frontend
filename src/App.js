import React from 'react';
import { Routes, Route, Link } from 'react-router';
import './App.css';
import Header from './components/header/header';
import Home from './pages/home';
import { Resultados } from './components/resultados/resultados';

function App() {
  document.title = "Skyreader"
  return (
    <div className="App">
      <header className="App-header">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights/:from/:to/:dedate/:arrdate" element={<Resultados/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
