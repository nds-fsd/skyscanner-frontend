import React from 'react'
import './flightsTable.css';
import moment from "moment";
import customFetch from '../../api';
import {RiDeleteBin2Fill} from 'react-icons/ri';
import {AiFillEye} from 'react-icons/ai';
import Swal from 'sweetalert2';
import vuelingLogo from '../../images/airline_logos/vueling_logo.png';
import ryanairLogo from '../../images/airline_logos/ryaniar_logo.png';
import aireuropaLogo from '../../images/airline_logos/air_europa_logo.png';
import iberiaLogo from '../../images/airline_logos/iberia_logo.png';
import bintercanariasLogo from '../../images/airline_logos/binter_logo.webp';


const FlightsTable = (props) => {
    const {flights, setSelectedFlight, setModalIsOpen, type, setDeleted} = props;

    const handleDelete = (f) => {
        let data = {
            flight_id: f._id
        }
        Swal.fire({
            title: '✈️ Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                customFetch('DELETE', `${type}`, {body: data})
                    .then(() => setDeleted(true), setModalIsOpen(false))
                    Swal.fire(
                        'Deleted!',
                        'Your flight has been deleted. Please refresh the page.',
                        'success'
                    )
                    .catch(error => {
                    console.error(error);
                    if (error.status === 404 || error.status === 500) {
                        Swal.fire({
                          icon: 'error',
                          title: 'Oops...',
                          text: 'impossible to update airport!'
                        })
                    }})
                
            }
        })        
    }

    const handleSeeClick = (f) => {
        setSelectedFlight(f);
        setModalIsOpen(true);
    }

    return (
        <table className="flights-table">
            <thead>
                <tr className="header-table">
                    <th>Airline</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Departure date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {flights.map(f => {
                return (
                    <tr className="body-table" onClick={() => handleSeeClick(f)}>
                        <td>
                            {/* {f.airline} */}
                            {f.airline?.replace(/\s/g, '').toLowerCase() === "vueling" && <img className="airline-logo" alt={f.airline} src={vuelingLogo}/>}
                            {f.airline?.replace(/\s/g, '').toLowerCase() === "ryanair" && <img className="airline-logo" alt={f.airline} src={ryanairLogo}/>}
                            {f.airline?.replace(/\s/g, '').toLowerCase() === "iberia" && <img className="airline-logo" alt={f.airline} src={iberiaLogo}/>}
                            {f.airline?.replace(/\s/g, '').toLowerCase() === "aireuropa" && <img className="airline-logo" alt={f.airline} src={aireuropaLogo}/>}
                            {f.airline?.replace(/\s/g, '').toLowerCase() === "bintercanarias" && <img className="airline-logo" alt={f.airline} src={bintercanariasLogo}/>}
                        </td>
                        <td>
                            {f.from}
                            {/* <span>
                                <svg className="plane-icon" fill="black" width="20px" height="20px" viewBox="0 0 20 40" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 16.21v-1.895L14 8V4a2 2 0 0 0-4 0v4.105L2 14.42v1.789l8-2.81V18l-3 2v2l5-2 5 2v-2l-3-2v-4.685l8 2.895z"/>
                                </svg>
                            </span> */}
                        </td>
                        <td>
                            {f.to}
                        </td>
                        <td>
                            {moment(f.dedate).format('LL')}
                        </td>
                        <td>
                            <button className="table-btn-see" onClick={() => handleSeeClick(f)}><AiFillEye /></button>
                            <button className="table-btn-delete" onClick={() => handleDelete(f)}><RiDeleteBin2Fill /></button>
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    )
}

export default FlightsTable;