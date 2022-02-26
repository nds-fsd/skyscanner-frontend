import React from "react";
import './searchHeader.css'

function SearchHeader ({from, to, date}) {
    const calendarDate = new Date(date).toLocaleDateString();
    return(
        <div>
            <div className="flight-summary">
                <h2 className="destination">
                    {from}<span>
                        <svg className="plane-icon" fill="#FFFFFF" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 16.21v-1.895L14 8V4a2 2 0 0 0-4 0v4.105L2 14.42v1.789l8-2.81V18l-3 2v2l5-2 5 2v-2l-3-2v-4.685l8 2.895z"/>
                        </svg>
                    </span>{to}</h2>
                <p className="flight-params">{calendarDate}</p>
            </div>
            <div className="triangle" />
        </div>
    )
}
export default SearchHeader;