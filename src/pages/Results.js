import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import DataCard from "../components/data-card"
import SearchResult from "../components/search-result"
import Sidebar from "../components/sidebar"
import './Results.css'
import Header from "../components/Header-page-two";
import { useLocation } from 'react-router'


function Results () {
    const location = useLocation();
    const [params, setParams] = useState(location.pathname.split("/"));
    const [DataCard, setDataCard] = useState ([]);

        //navigate(`/flights/${data?.from}/${data?.to}/${data?.dedate}/${data?.arrdate}`)

    console.log(params)
    useEffect(() => {
        const request = fetch(`http://localhost:5001/flights/search?from=${params[2]}&to=${params[3]}&dedate=${params[4]}&arrdate=${params[5]}`)
        console.log("console log de params", params)
        request.then(response => {
        if (!response.ok) throw new Error("Couldn't ")
         return response.json();
        
        })
        .then((json) => {
        setDataCard(json)
        }
        );
        console.log("esto es flight", DataCard )
    })
  
    return (
        <section >
            <Header/>
            <SearchResult className="from-to"/>
            <div className="total-page">
            <Sidebar className="sidebar-content"></Sidebar>
            
            {DataCard.map((flight) => (
            <DataCard from={flight.from} to={flight.to} dedate={flight.dedate} arrdate={flight.arrdate} price={flight.price} airline={flight.airline}/>))}
            </div>
        </section>
    )
    };  
export default Results