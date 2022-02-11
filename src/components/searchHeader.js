import React from "react";
import './result-style.css'

function SearchHeader ({data}) {
   
    return(
        <div className="total-result">
            <p className="total-result-title">{data.from} {"-"} {data.to} {data.dedate}</p>
        </div>
    )
     //<img src=`src/assets/img/${result.compañia}.png` ejemplo para q se muestre compañia
}
export default SearchHeader;