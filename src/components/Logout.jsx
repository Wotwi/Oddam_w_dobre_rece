import React from 'react';
import {Link} from "react-router-dom";

function Logout() {
    return (
        <div className="container">
            <nav className="home__nav">
                    <span className="home__nav-top">
                        <Link to={'/login'} className="home__account">Zaloguj</Link>
                        <Link to={'/register'} className="home__account">Załóż konto</Link>
                    </span>
                <span className="home__nav-bottom">
                        <Link to={'/'} className="home__nav-item">Start</Link>
                        <a href="" className="home__nav-item">O co chodzi?</a>
                        <a href="" className="home__nav-item">O nas</a>
                        <a href="" className="home__nav-item">Fundacja i organizacje</a>
                        <a href="" className="home__nav-item">Kontakt</a>
                    </span>
            </nav>
            <section className="logout__wrapper">
                <h1 className="logout__header">Wylogowanie nastąpiło pomyślnie!</h1>
                <img src="src/assets/Decoration.svg" alt="" className="logout__decoration"/>
                <Link className="logout__button">Strona główna</Link>
            </section>
        </div>
    );
}

export default Logout;