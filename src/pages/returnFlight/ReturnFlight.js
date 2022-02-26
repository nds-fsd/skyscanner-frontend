import React from 'react'
import Footer from '../../components/footer/Footer'
import './returnFlight.css'

const ReturnFlight = () => {
  return (
    <div className="container">
        <div className="flight-summary">
            <h2 className="destination">Alicante (ALC)</h2>
            <p className="flight-params">1 adult · One way</p>
        </div>
        <div className="triangle" />
        <div className="selected-flight">
            <h3 className="flight-direction">Ida<span className="date">Viernes, Sep 25, 2020</span></h3>
            <div className="flight">
                <h5>Eric flight component</h5>
                <button className="book-btn">Reservar vuelo</button>
            </div>
        </div>
        <div className="selected-flight">
            <h3 className="flight-direction">Vuelta</h3>
            <div className="flight">
                <h5>Eric flight component</h5>
                <button className="search-btn">Buscar vuelos de vuelta</button>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default ReturnFlight