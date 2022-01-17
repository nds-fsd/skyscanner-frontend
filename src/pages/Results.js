import React from "react"
import FlightCard from "../components/card"
import SearchResult from "../components/search-result"
import Sidebar from "../components/sidebar"
import './Results.css'

function Results () {
    return (
    <section >
        <SearchResult className="from-to"></SearchResult>
        <div className="total-page">
            <Sidebar className="sidebar-content"></Sidebar>
             <FlightCard className="card-content"></FlightCard>
        </div>
    </section>
    )
}

export default Results