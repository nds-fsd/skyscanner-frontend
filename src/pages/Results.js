import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import DataCard from "../components/data-card"
import SearchResult from "../components/search-result"
import Sidebar from "../components/sidebar"
import './Results.css'
import Header from "../components/header/header";
import { useLocation } from 'react-router'


function Results () {
    const location = useLocation();
    const [params, setParams] = useState(location.pathname.split("/"));
    const [flightCard, setFlightCard] = useState ([DataCard]);

        //navigate(`/flights/${data?.from}/${data?.to}/${data?.dedate}/${data?.arrdate}`)

    useEffect(async () => {
        // const response = await fetch()
        fetch(`http://localhost:3020/flights/search?from=${params[2]}&to=${params[3]}&dedate=${params[4]}&arrdate=${params[5]}`)
        .then(res => res.json())
        .then(res => console.log(res))
        // request.then(response => {
        // console.log('aqui')
        // if (!response.ok) throw new Error("Couldn't ")
        //  return response.json();
        
        // })
        // .then((json) => {
        //     setFlightCard(json)
        // }
        // );
        // console.log("esto es flight", flightCard )
    },[])
  
    return (
        <section >
            <Header/>
            <div className="wrapper">
                <Sidebar className="sidebar-content"></Sidebar>
                <div className="total-page">
                <SearchResult className="from-to"/>
                
                {flightCard.map((flight) => (
                    <DataCard 
                        from={flight.from} 
                        to={flight.to} 
                        dedate={flight.dedate} 
                        arrdate={flight.arrdate} 
                        price={flight.price} 
                        airline={flight.airline}/>
                    ))
                }
                </div>
            </div>
        </section>
    )
    };  
export default Results