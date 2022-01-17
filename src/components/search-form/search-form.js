import React from "react";

const Search = () => {
    return (
        <div>
            <p>Buscar</p>
            <form>
                <label for="from">From</label>
                <input type="search" />
                <label for="To">To</label>
                <input type="search" />
                <label for="To">When</label>
                <input type="date" />
                <button>See flights</button>
            </form>
        </div>
    );
};

export default Search;