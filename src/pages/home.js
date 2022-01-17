import React from "react";
import Search from "../components/search-form/search-form";
import "./home.css"

const Home = () => {
    return (
        <div className="homepage">
            <p>Home Page</p>
            <Search />
        </div>
    );
};

export default Home;