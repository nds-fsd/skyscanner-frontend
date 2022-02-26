import React from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/Navbar";
import Search from "../../components/searchForm/SearchForm";
import "./home.css"

const Home = () => {
    
    return (
        <div className="homepage">
            <NavBar/>
            <section className="hero">
                <div className="search-form-container">
                     <h2 className="title-homepage">
                        Find the best flight and save
                    </h2>
                    <Search />
                </div>
            </section>
            <section className="section-man">
                <div className="little-man-img" />
                <div className="little-man-text" >
                   <h3 className="little-man-title">
                        Busca el vuelo que te lleve a la desconexión absoluta
                    </h3>
                    <h5 className="little-man-subtitle">
                        Busca las mejores ofertas de vuelos con Flynd y asegurate unas vacaciones inolvidables
                    </h5> 
                </div>
            </section>
            <section className="section-info">
                <div className="articles">
                    <article className="info-article" >
                        <div className="article-image">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div className="article-text">
                            <h5 className="article-title">
                                Estaremos listos cuando tú lo estés
                            </h5>
                            <p className="article-description">
                                Consulta adónde puedes viajar en estos momentos y encuentra las mejores ofertas entre miles de vuelos, hoteles y alquileres de coches.
                            </p>
                        </div>
                    </article>
                    <article className="info-article" >
                        <div className="article-image">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </div>
                        <div className="article-text">
                            <h5 className="article-title">
                                Haz planes sin preocupaciones
                            </h5>
                            <p className="article-description">
                                Prepárate para cualquier imprevisto con las últimas actualizaciones, hoteles y coches con cancelación gratuita y seguro de viaje frente a la COVID-19.
                            </p>
                        </div>
                    </article>
                    <article className="info-article" >
                        <div className="article-image">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                        </div>
                        <div className="article-text">
                            <h5 className="article-title">
                            Viaja sin ningun tipo de complicacion
                            </h5>
                            <p className="article-description">
                                Con nosotros, siempre sabrás lo que pagas, sin sorpresas de última hora. Para que te relajes incluso antes de que empiece tu viaje.
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