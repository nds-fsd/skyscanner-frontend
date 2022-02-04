import React  from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import "./search-form.css"

const Search = () => {
    
    const { register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        navigate(`/flights/${data?.from}/${data?.to}/${data?.dedate}/${data?.arrdate}`);
        
    
    console.log(data);
  };

    return (
        <div className="form-box">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                {/* <label for="from">From</label> */}
                <input type="search" {...register("from")} placeholder="From" />
<<<<<<< HEAD
                <label htmlFor="To"></label>
                <input type="search" {...register("to")} placeholder="To" />
                <div><label htmlFor="To">Departure date</label>
                <input type="date" {...register("dedate")}/></div>
                <div><label htmlFor="To">Return date</label>
=======
                <label for="To"></label>
                <input type="search" {...register("to")} placeholder="To" />
                <div><label for="To">Departure date</label>
                <input type="date" {...register("dedate")}/></div>
                <div><label for="To">Return date</label>
>>>>>>> f4b36303 (add loginform and navigation bar)
                <input type="date" {...register("arrdate")}/></div>
                <span className="form-enviar">
                    <input type="submit" value="See flights"/>
                </span>
            </form>
        </div>
    );
};

export default Search;