import React from 'react';
import { Routes, Route} from 'react-router';
import './App.css';
import NavBar from './components/Navbar/navbar';
import Home from './pages/home';
import { Login } from './pages/login';
import Register from './pages/register';
import Results from './pages/Results';

function App() {
  document.title = "Skyreader"
  return (
    <div className="App">
      <header>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/flights/:from/:to/:dedate/:arrdate" element={<Results/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
