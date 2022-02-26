import React from 'react';
import './layout.css';
import {Routes, Route} from 'react-router';
import Login from '../loginPage/LoginPage';
import Register from '../registerPage/RegisterPage';
import Results from '../results/Results';
import ReturnFlight from '../returnFlight/ReturnFlight';
import NavBar from '../../components/navbar/Navbar';
import Home from '../home/Home';

import Filters from '../../components/filters/Filters';

const Layout = () => {
  return (
    <div>
        <NavBar />
        <div className="body">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/return" element={<ReturnFlight />} />
                <Route path="/filters" element={<Filters />} />
                <Route path="/flights/:from/:to/:dedate" element={<Results />} />
            </Routes>
        </div>
    </div>
  )
}

export default Layout