import React, {useContext}  from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import "./searchForm.css";
import { UserContext } from '../../context/userContext';

const Search = (destination) => {
    const {user} = useContext(UserContext);
    const { register, handleSubmit} = useForm(  
        {defaultValues: {from:user?.prefairport},
        mode: 'onTouched',
        shouldUseNativeValidation: true}
    );
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
                        <input className="search-form-input" type="search" {...register("from", { 
                        required: "Enter city of origin." , 
                        })} placeholder="From" />
                    </div>
                    <div className="search-form-group">
                        <label className="search-form-label text-input">To</label>
                        <input className="search-form-input" type="search" {...register("to",{ 
                        required: "Enter destination city." , 
                        })} placeholder="To" />
                    </div>
                    <div className="search-form-group">
                        <label className="search-form-label">Departure date</label>
                        <input className="search-form-input date-input" type="date" {...register("dedate",{ 
                        required: "Enter a departure date." , 
                        })} placeholder="09/07/2022"/>
                    </div>
                    <div className="search-form-group">
                        <label className="search-form-label" >Return date</label>
                        <input className="search-form-input date-input" type="date" {...register("arrdate",{ 
                        required: "Enter a return date." , 
                        })} placeholder="09/11/2022"/>
                    </div>
                    <div className="search-form-group">
                        <label className="search-form-label" >Passangers</label>
                        <input className="search-form-input number-input" type="text" {...register("passangers",{ 
                        required: "Enter number of passengers." , 
                        })} placeholder="#"/>
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