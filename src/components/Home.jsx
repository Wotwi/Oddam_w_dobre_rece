import {Link} from "react-router-dom";
import ThreeColumns from "./ThreeColumns.jsx";
import React from "react";
import FourSteps from "./FourSteps.jsx";

function Home() {
    return (
        <div className="container">
            <div className="home">
                <nav className="home__nav">
                    <span className="home__nav-top">
                        <a href="" className="home__account">Zaloguj</a>
                        <a href="" className="home__account">Załóż konto</a>
                    </span>
                    <span className="home__nav-bottom">
                        <a href="" className="home__nav-item">Start</a>
                        <a href="" className="home__nav-item">O co chodzi?</a>
                        <a href="" className="home__nav-item">O nas</a>
                        <a href="" className="home__nav-item">Fundacja i organizacje</a>
                        <a href="" className="home__nav-item">Kontakt</a>
                    </span>
                </nav>
                <div className="home__wrapper">
                    <section className="home__content">
                        <h3 className="home__header">Zacznij pomagać!</h3>
                        <h3 className="home__header">Oddaj niechciane rzeczy w zaufane ręce</h3>
                        <img src="src/assets/Decoration.svg" className="home__header-decoration"/>
                        <div className="home__btn-wrapper">
                            <Link to="/login" className="home__btn">ODDAJ RZECZY</Link>
                            <Link to="/login" className="home__btn">ZORGANIZUJ ZBIÓRKĘ</Link>
                        </div>
                    </section>
                </div>
            </div>
            <ThreeColumns />
            <FourSteps />
        </div>
    );
}

export default Home;