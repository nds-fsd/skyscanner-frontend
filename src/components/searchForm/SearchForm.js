import React  from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import "./searchForm.css"

const Search = () => {
    
    const { register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        navigate(`/flights/${data?.from.toLowerCase().replace(/\s/g, '')}/${data?.to.toLowerCase().replace(/\s/g, '')}/${data?.dedate}/${data?.arrdate}/${data.passangers}`);
    };

    

    return (
        <div className="form-box">
            <form onSubmit={handleSubmit(onSubmit)} className="search-form">
                <div className="search-form-inputs">
                    <div className="search-form-group">
                        <label className="search-form-label text-input">From</label>
                        <input className="search-form-input" type="search" {...register("from")} placeholder="From" />
                    </div>
                    <div className="search-form-group">
                        <label className="search-form-label text-input">To</label>
                        <input className="search-form-input" type="search" {...register("to")} placeholder="To" />
                    </div>
                    <div className="search-form-group">
                        <label className="search-form-label">Departure date</label>
                        <input className="search-form-input date-input" type="date" {...register("dedate")} placeholder="09/07/2022"/>
                    </div>
                    <div className="search-form-group">
                        <label className="search-form-label" >Return date</label>
                        <input className="search-form-input date-input" type="date" {...register("arrdate")} placeholder="09/11/2022"/>
                    </div>
                    <div className="search-form-group">
                        <label className="search-form-label" >Pasajeros</label>
                        <input className="search-form-input number-input" type="text" {...register("passangers")} placeholder="#"/>
                    </div>
                </div>
                <div className="search-form-submit">
                    <input className="search-form-button" type="submit" value="See flights"/>
                </div>
            </form>
        </div>
    );
};

export default Search;