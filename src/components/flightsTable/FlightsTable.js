import React from 'react'
import './flightsTable.css';
import moment from "moment";
import customFetch from '../../api';

const FlightsTable = (props) => {
    const {flights, setSelectedFlight, setModalIsOpen, type, setDeleted} = props;

    const handleDelete = (f) => {
        let data = {
            flight_id: f._id
        }
        customFetch('DELETE', `${type}`, {body: data})
            .then((response) => {
                setDeleted(true);
            })
            .catch((error) => console.log(error));
    }

    const handleSeeClick = (f) => {
        setSelectedFlight(f);
        setModalIsOpen(true);
    }

    return (
        <table className="flights-table">
            <thead>
                <tr>
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
                    <tr>
                        <td>
                            {f.airline}
                        </td>
                        <td>
                            {f.from}
                        </td>
                        <td>
                            {f.to}
                        </td>
                        <td>
                            {moment(f.dedate).format('LLLL')}
                        </td>
                        <td>
                            <button className="table-btn-delete" onClick={() => handleDelete(f)}>Delete</button>
                            <button className="table-btn-see" onClick={() => handleSeeClick(f)}>See</button>
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    )
}

export default FlightsTable;