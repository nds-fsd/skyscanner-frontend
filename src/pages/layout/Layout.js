import React from 'react';
import './layout.css';
import {Routes, Route} from 'react-router';
import Login from '../loginPage/LoginPage';
import Register from '../registerPage/RegisterPage';
import ResultsPage from '../resultsPage/ResultsPage';
import ReturnFlightPage from '../returnFlightPage/ReturnFlightPage';
import EricReturnFlightPage from '../returnFlightPage/EricReturnFlightPage';
import NavBar from '../../components/navbar/Navbar';
import Home from '../home/Home';
import BookingPage from '../bookingPage/BookingPage';
import SuccessPage from '../successPage/SuccessPage';
import Profile from '../profile/Profile';

const Layout = () => {
  return (
    <div>
        <NavBar />
        <div className="body">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/flights/:from/:to/:dedate/:retdate/:passangers" element={<ResultsPage />} />
                <Route path="/flights/:from/:to/:dedate/:retdate/:passangers/:outboundFlightUnparsed" element={<ReturnFlightPage />} />
                <Route path="/flights/:from/:to/:dedate/:retdate/:passangers/:id" element={<EricReturnFlightPage />} />
                <Route path="/flights/:passangers/:outboundFlightUnparsed/:returnFlightUnparsed" element={<BookingPage />} />
                <Route path="/success" element={<SuccessPage />} />
                <Route path="/profile" element ={<Profile/>} />
            </Routes>
        </div>
    </div>
  )
}

export default Layout