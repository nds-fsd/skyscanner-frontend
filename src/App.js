import React, {useState} from 'react';
import { Routes, Route} from 'react-router';
import { UserContext } from './context/userContext';
import './App.css';
import NavBar from './components/Navbar/navbar';
import Home from './pages/home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register';
import Results from './pages/Results';

function App() {
  document.title = "Skyreader";
  const [user, setUser] = useState ({});
  return (
    <UserContext.Provider value={{
      user,
      setUser
  }}>
    <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/flights/:from/:to/:dedate/:arrdate" element={<Results/>} />
          <Route path="/profile" element ={<Profile/>} />
        </Routes>
    </div>
    </UserContext.Provider>
  );
}

export default App;
