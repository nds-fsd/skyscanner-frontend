import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

export const Resultados = () => {
    const location = useLocation();

    const [params, setParams] = useState(location.pathname.split("/"))
    console.log(params)


    useEffect(() => {
        fetch(`http://localhost:5001/flights/search?from=${params[2]}&to=${params[3]}&dedate=${params[4]}&arrdate=${params[5]}`)
    }, [])
    
    return (
        <div>
            <p>{params[2]}</p>   
        </div>
    )
}
