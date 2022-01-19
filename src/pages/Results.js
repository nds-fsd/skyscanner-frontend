import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import FlightCard from "../components/card"
import SearchResult from "../components/search-result"
import Sidebar from "../components/sidebar"
import './Results.css'
import { useLocation } from 'react-router'

function Results () {
    const location = useLocation();
    const [params] = useState(location.pathname.split("/"));
    const [data, setData] = useState ([]);
    console.log(params)
    useEffect(() => {
        const request = fetch(`http://localhost:5001/flights/search?from=${params[2]}&to=${params[3]}&dedate=${params[4]}&arrdate=${params[5]}`)
        request.then(response => {
        if (!response.ok) throw new Error("Couldn't ")
         return response.json();
        })
        .then((json) => {
        console.log(json);
        setData(json)
        }
        );
    })

    return (
        <section >
            <SearchResult className="from-to"></SearchResult>
            <div className="total-page">
            <Sidebar className="sidebar-content"></Sidebar>
            {data.map((flight) => (<FlightCard className="card-content" from={flight.from} to={flight.to} dedate={flight.dedate} arrdate={flight.arrdate} price={flight.price} airline={flight.airline}/>))}
            </div>
        </section>
    )
    };  
export default Results