import React from "react"
import './results.css';
import { useEffect } from "react";
import { useState } from "react";
import FlightCard from "../../components/flightCard/FlightCard";
import SelectedCard from "../../components/selectedCard/SelectedCard";
import SearchHeader from "../../components/searchHeader/SearchHeader"
import Sidebar from "../../components/sideBar/Sidebar"
import { useLocation, useNavigate, useParams } from 'react-router';
import customFetch from '../../api';


function Results () {
    const [flightCard, setFlightCard] = useState ([]);
    const [ReturnFlightCard, setReturnFlightCard] = useState ([]);
    const [selectedFlight, setSelectedFlight] = useState();
    const {from, to, dedate, arrdate, deid} = useParams();
    const navigate = useNavigate();

    useEffect( () => {
        customFetch("POST", `flights/search?from=${from}&to=${to}&dedate=${dedate}`)
        .then(res => {
            if (!res.ok) throw new Error("Couldn't ")
            return res.json();
        }).then((json) => {
            console.log(json);
            setFlightCard(json);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    //Possible mal interpretació dels fetch
    useEffect( () => {
        if (deid) {
            customFetch("POST", `flights/search?from=${to}&to=${from}&dedate=${arrdate}`)
            .then(response => {
                if (!response.ok) throw new Error("Couldn't ")
                return response.json();
                })
            .then((json) => {
                setReturnFlightCard(json);
            });
        }
    }, [deid]);

    const headerData = flightCard[flightCard.length-1];

    return (
            <div className="wrapper">
                <div className="results-page">
                    <div className="sidebar">
                        <Sidebar />
                    </div>
                    <div className="results-section">
                        <div className="results-header">
                            <SearchHeader from={!deid ? from : to} to={!deid ? to : from} date={!deid ? dedate : arrdate}/>
                        </div>
                        <div className="results-cards">
                            {selectedFlight && <SelectedCard
                                flight={selectedFlight}
                                onClick={(flightId) => {if (!deid) {navigate(`/flights/${from}/${to}/${dedate}/${arrdate}/${flightId}`)}}}
                            />}
                            {!deid ? <div></div>
                            : <div>
                                <div className="selected-title">
                                    <p> <b>Return: </b></p>
                                    <p>{new Date(arrdate).toDateString()}</p>
                                </div>
                            </div>}
                            {!deid ? flightCard.map((flight) => (
                                <FlightCard
                                    flight={flight} key={flight._id}
                                    onClick={(flightId) => {
                                        if (!deid) {
                                            setSelectedFlight(flightCard.find((flight) => flight._id === flightId ));
                                            navigate(`/flights/${from}/${to}/${dedate}/${arrdate}/${flightId}`)

                                        }}}
                                    />
                                ))
                            : ReturnFlightCard.map((flight) => (
                                <FlightCard
                                    flight={flight} key={flight._id}
                                    onClick={(flightId) => {
                                        if (!deid) {
                                            setSelectedFlight(flightCard.find((flight) => flight._id === flightId ));
                                            navigate(`/flights/${from}/${to}/${dedate}/${arrdate}/${flightId}`)

                                        }}}
                                    />
                                ))}
                        </div>
                    </div>
                    <div className="publi"></div>
                </div>
            </div>
        )
    };  
export default Results