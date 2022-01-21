import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import FlightCard from "../components/data-card"
import SearchResult from "../components/search-result"
import Sidebar from "../components/sidebar"
import './Results.css'
import Header from "../components/Header-page-two";
// import { useLocation } from 'react-router'


function Results () {
    // const location = useLocation();
    const [params, setParams] = useState(location.pathname.split("/"));
    const [DataCard, setDataCard] = useState ([]);
    console.log(params)
    useEffect(() => {
        const request = fetch(`http://localhost:5001/flight/search?from=Barcelona&to=London&dedate=2022-02-15&arrdate=2022-02-22`)
        request.then(response => {
        if (!response.ok) throw new Error("Couldn't ")
         return response.json();
        })
        .then((json) => {
        console.log(json);
        setDataCard(json)
        }
        );
    })

    return (
        <section >
            <Header></Header>
            <SearchResult className="from-to"></SearchResult>
            <div className="total-page">
            <Sidebar className="sidebar-content"></Sidebar>
            {DataCard.map((flight) => (<FlightCard className="card-content" from={flight.from} to={flight.to} dedate={flight.dedate} arrdate={flight.arrdate} price={flight.price} airline={flight.airline}/>))}
            </div>
        </section>
    )
    };  
export default Results