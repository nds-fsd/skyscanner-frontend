import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/Navbar";
import Search from "../../components/searchForm/SearchForm";
import "./home.css"

const Home = () => {
    const [destination, setDestination] = useState('')
    const sevilla = () => {
        setDestination("Sevilla");
    }

    
    return (
        <div className="homepage">
            <NavBar/>
            <section className="hero">
                <div className="search-form-container">
                     <h2 className="title-homepage">
                        Find the best flight and save
                    </h2>
                    <Search destination={destination}/>
                </div>
            </section>
            <div className="section-suggested">
                <div className="suggested-title">Suggested destinations</div>
                <div className="suggested">
                    <div className="suggested-card-1" onClick={sevilla}>Sevilla</div>
                    <div className="suggested-card-2">Oviedo</div>
                    <div className="suggested-card-3">Tarragona</div>
                    <div className="suggested-card-4">Zaragoza</div>
                </div>
            </div>
            <section className="section-man">
                <div className="little-man-img" />
                <div className="little-man-text" >
                   <h3 className="little-man-title">
                   Look for the flight that takes you to absolute disconnection
                    </h3>
                    <h5 className="little-man-subtitle">
                    Find the best flight deals with Skyreader and book an unforgettable vacation
                    </h5> 
                </div>
            </section>
            <section className="section-info">
                <div className="articles">
                    <article className="info-article" >
                        <div className="article-image">
                            <svg xmlns="http://www.w3.org/2000/svg" className="home-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div className="article-text">
                            <h5 className="article-title">
                            We'll be ready when you are
                            </h5>
                            <p className="article-description">
                            Check where you can travel right now and find the best deals among thousands of flights, hotels and car rentals.
                            </p>
                        </div>
                    </article>
                    <article className="info-article" >
                        <div className="article-image">
                            <svg xmlns="http://www.w3.org/2000/svg" className="home-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </div>
                        <div className="article-text">
                            <h5 className="article-title">
                            Make plans without worries
                            </h5>
                            <p className="article-description">
                            Prepare for any unforeseen event with the latest updates, hotels and cars with free cancellation and travel insurance against COVID-19.
                            </p>
                        </div>
                    </article>
                    <article className="info-article" >
                        <div className="article-image">
                            <svg xmlns="http://www.w3.org/2000/svg" className="home-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                        </div>
                        <div className="article-text">
                            <h5 className="article-title">
                            Travel without any complications
                            </h5>
                            <p className="article-description">
                            With us, you always know what you pay for, with no last minute surprises. So you can relax even before your trip begins.
                            </p>
                        </div>
                    </article>
                </div>
                
            </section>
            <section className="footer">
                <Footer />
            </section>
        </div>
    );
};

export default Home;