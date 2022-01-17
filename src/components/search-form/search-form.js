import React , {useState} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Search = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
    const [searchedData, setSearchedData] = useState();
    const navigate = useNavigate();
    const onSubmit = data => {
        navigate(`/flights/${data?.from}/${data?.to}/${data?.dedate}/${data?.arrdate}`);
        
    // fetch(`http://localhost:5001/flights/search?from=${data.from}&to=${data.to}&dedate=${data.dedate}&arrdate=${data.arrdate}`)


    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // })
    // .then(response => {
        // if (!response.ok) throw new Error("Couldn't ")
        //  return response.json();
    // 
        // })
    // .then((json) => {
        // setSearchedData(json)
    // });
// console.log(response.json())

    //   .then(json => {
    //     alert(JSON.stringify(json));
    //   })
    //   .catch(error => {
    //     alert(error);
    //   })
    console.log(data);
  };

    return (
        <div>
            <p>Buscar</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label for="from">From</label>
                <input type="search" {...register("from")}/>
                <label for="To">To</label>
                <input type="search" {...register("to")}/>
                <label for="To">Departure date</label>
                <input type="date" {...register("dedate")}/>
                <label for="To">Return date</label>
                <input type="date" {...register("arrdate")}/>
                <input type="submit" />
                {/* <button>See flights</button> */}
            </form>
        </div>
    );
};

export default Search;