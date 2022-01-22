import React from "react";
import Search from "../components/search-form/search-form";
import "./home.css"

const Home = () => {
    return (
        <div className="homepage">
            <h2 className="title-homepage">Find the best flight and save</h2>
            <Search />
        </div>
    );
};

export default Home;