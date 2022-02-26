import React from "react";
import './searchHeader.css'

function SearchHeader ({from, to, date}) {
    const calendarDate = new Date(date).toLocaleDateString();
    return(
        <div className="total-result">
            <p className="total-result-title">{from} {"-"} {to}<br/> {calendarDate}</p>
        </div>
    )
}
export default SearchHeader;