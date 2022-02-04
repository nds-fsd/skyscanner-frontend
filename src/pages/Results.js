import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import DataCard from "../components/data-card"
<<<<<<< HEAD
import SearchHeader from "../components/searchHeder"
import Sidebar from "../components/sidebar"
import './Results.css'
import { useLocation } from 'react-router'
import NavBar from "../components/Navbar/navbar";
=======
import SearchResult from "../components/search-result"
import Sidebar from "../components/sidebar"
import './Results.css'

import { useLocation } from 'react-router'
>>>>>>> f4b36303 (add loginform and navigation bar)


function Results () {
    const location = useLocation();
    const [params, setParams] = useState(location.pathname.split("/"));
    const [flightCard, setFlightCard] = useState ([]);
<<<<<<< HEAD
    
=======
    //const headerData = flightCard[flightCard.lenght-1];
>>>>>>> f4b36303 (add loginform and navigation bar)
    //const [selectedCard, setSelectedCard] = useState([]);

    useEffect( () => {
       
<<<<<<< HEAD
        fetch(`http://localhost:3020/flights/search?from=${params[2]}&to=${params[3]}&dedate=${params[4]}&arrdate=${params[5]}`)
=======
        fetch(`http://localhost:5001/flights/search?from=${params[2]}&to=${params[3]}&dedate=${params[4]}&arrdate=${params[5]}`)
>>>>>>> f4b36303 (add loginform and navigation bar)

        .then(response => {
            if (!response.ok) throw new Error("Couldn't ")
             return response.json();
            })
        .then((json) => {
            console.log(json);
            setFlightCard(json);
           
        });
        
    },[]);
<<<<<<< HEAD

    const headerData = flightCard[flightCard.length-1];  
    return (

        <div className="wrapper">
        <NavBar/>
=======
       
    return (

        <div className="wrapper">
        
>>>>>>> f4b36303 (add loginform and navigation bar)
        <Sidebar className="sidebar-content"/>
        
            <div className="total-page">
                
            {/* si queremos que solo salga una vez el encabezado SearchResult tenemos que hacer un lenght-1 (está definido en la const de arriba) y pasar por props data.
<<<<<<< HEAD
            headerData &&<SearchResult data={headerData}/>*/}

            {headerData &&<SearchHeader data={headerData}/>}
=======
            headerData &&<SearchResult data={headerData}/>* el problema es que headerData me devuelve un undefined y no se pq*/}

            {/*de la siguiente forma SearchResult se repite tantas veces como arrays encuentra en la base de datos: por lo q interesa hacerlo como está arriba*/}

            {flightCard.map((flight)=>(
                <SearchResult from = {flight.from}
                to={flight.to}
                flight={flight} id={flight._id} key={flight._id}/>
            ))}
>>>>>>> f4b36303 (add loginform and navigation bar)
              
                {/* para poder seleccionar una card y utilizar el botón de ver vuelo{flightCard && flightCard.length > 0 && flightCard.map((flight) =>
                <DataCard flight={flight} id={flight._id} key={flight._id} onClick={() => {setSelectedCard(flight) }} />)}*/}

                {flightCard.map((flight) => (
                    <DataCard 
                        from={flight.from} 
                        to={flight.to} 
                        dedate={flight.dedate} 
                        arrdate={flight.arrdate} 
                        price={flight.price} 
                        airline={flight.airline}
                        flight={flight} id={flight._id} key={flight._id}/>
                    ))
                }
 
            </div>
        </div>
    
    )
    };  
export default Results