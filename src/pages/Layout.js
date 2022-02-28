import React from 'react'
import { Routes, Route} from 'react-router';
import Login from './login/Login';
import Register from './register';
import Results from './Results';
import ReturnFlight from './ReturnFlight';
import NavBar from '../components/Navbar/navbar';
import Home from './home';
import './layout.css'
import Filters from '../components/filters/Filters';

const Layout = () => {
  return (
    <div>
        <NavBar />
        <div className="body">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/return" element={<ReturnFlight/>} />
                <Route path="/filters" element={<Filters/>} />
                <Route path="/flights/:from/:to/:dedate" element={<Results/>} />
            </Routes>
        </div>
    </div>
  )
}

export default Layout