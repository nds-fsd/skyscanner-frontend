import React from 'react';
<<<<<<< HEAD
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
=======
import { useRoutes } from "react-router-dom";
import './App.css';
import Header from './components/header/header'
import Home from './pages/home';
import Results from './pages/Results';
import Login from './pages/login/Login';

function App() {
  document.title = "Skyreader"

  const routes = [
      {path:"/", element: <Home />},
      {path:"/flights/:from/:to/:dedate/:arrdate", element: <Results />},
      {path:"/register", element: <p>Register</p>},
      {path:"/login", element: <Login />},
  ]

  let element = useRoutes(routes);

  return (
    <div className="App">
      <div className="App-header">
        <Header routes={routes}/>
      </div>
      <div>
        {element}
      </div>
>>>>>>> f4b36303 (add loginform and navigation bar)
    </div>
  );
}

export default App;
