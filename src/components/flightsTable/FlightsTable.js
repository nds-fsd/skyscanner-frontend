import React from 'react'
import './flightsTable.css';
import moment from "moment";

const FlightsTable = (props) => {
    const {flights} = props;

    return (
        <table className="flights-table">
            <thead>
                <tr>
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
                            {f.from}
                        </td>
                        <td>
                            {f.to}
                        </td>
                        <td>
                            {moment(f.dedate).format('LLLL')}
                        </td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    )
}

export default FlightsTable