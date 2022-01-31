import React from "react";
import './result-style.css'

function SearchResult ({from, to}) {
   
    return(
        <div className="total-result">
            <p className="total-result-title">{from} {to}</p>
        </div>
    )
     //<img src=`src/assets/img/${result.compañia}.png` ejemplo para q se muestre compañia
}
export default SearchResult;