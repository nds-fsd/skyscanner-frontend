import React from 'react';
import './layout.css';
import {Routes, Route} from 'react-router';
import Login from '../loginPage/LoginPage';
import Register from '../registerPage/RegisterPage';
import ResultsPage from '../resultsPage/ResultsPage';
import ReturnFlightPage from '../returnFlightPage/ReturnFlightPage'
import NavBar from '../../components/navbar/Navbar';
import Home from '../home/Home';
import BookingPage from '../bookingPage/BookingPage';
import SuccessPage from '../successPage/SuccessPage';
import Profile from '../profile/Profile';
import PrivateRoute from '../../authRoutes/privateRoute';


const Layout = () => {
  return (
    <div className="layout-wrapper">
        <NavBar />
        <div className="body">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/flights/:from/:to/:dedate/:retdate/:passangers" element={<ResultsPage />} />
                <Route path="/flights/:from/:to/:dedate/:retdate/:passangers/:outboundFlightUnparsed" element={<ReturnFlightPage />} />
                <Route path="/flights/:passangers/:outboundFlightUnparsed/:returnFlightUnparsed" element={<BookingPage />} />
                <Route path="/success" element={<SuccessPage />} />
                <Route path="/profile" element ={<PrivateRoute ><Profile/></PrivateRoute>} />
            </Routes>
        </div>
    </div>
  )
}

export default Layout