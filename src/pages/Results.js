import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import DataCard from "../components/data-card"
import SearchHeader from "../components/searchHeader"
import Sidebar from "../components/sidebar"
import './Results.css'
import { useLocation } from 'react-router'
import NavBar from "../components/Navbar/navbar";
import Filters from "../components/filters/Filters";


function Results () {
    const location = useLocation();
    const [params, setParams] = useState(location.pathname.split("/"));
    const [flightCard, setFlightCard] = useState ([]);
    
    //const [selectedCard, setSelectedCard] = useState([]);

    useEffect( () => {
       
        fetch(`http://localhost:3020/flights/search?from=${params[2]}&to=${params[3]}&dedate=${params[4]}&arrdate=${params[5]}`)

        .then(response => {
            if (!response.ok) throw new Error("Couldn't ")
             return response.json();
            })
        .then((json) => {
            console.log(json);
            setFlightCard(json);
           
        });
        
    },[]);

    const headerData = flightCard[flightCard.length-1];  
    return (

        <div className="wrapper">
        <NavBar/>
        <Filters />
        
            <div className="total-page">
                
            {/* si queremos que solo salga una vez el encabezado SearchResult tenemos que hacer un lenght-1 (está definido en la const de arriba) y pasar por props data.
            headerData &&<SearchResult data={headerData}/>*/}

            {headerData &&<SearchHeader data={headerData}/>}
              
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