import {Link} from "react-router-dom";
import ThreeColumns from "./ThreeColumns.jsx";
import React, {useEffect, useState} from "react";
import FourSteps from "./FourSteps.jsx";
import AboutUs from "./AboutUs.jsx";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../firebase-config.js";
import WeHelp from "./WeHelp.jsx";

function Home() {

    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, []);

    const logout = async () => {
        await signOut(auth);
    }

    return (
        <div className="container">
            <div className="home">
                <nav className="home__nav">
                    <span className="home__nav-top">
                        {!user ? (
                            <>
                                <Link to={'/login'} className="home__account">Zaloguj</Link>
                                <Link to={'/register'} className="home__account">Załóż konto</Link>
                            </>
                            ) : (
                                <>
                                    <p className="home__user__email">Cześć {user.email}!</p>
                                    <Link to={'/oddaj'} className="home__account">Oddaj rzeczy</Link>
                                    <Link to={'/logout'}><p onClick={logout} className="home__logout">Wyloguj</p></Link>
                                </>
                            )}
                    </span>
                    <span className="home__nav-bottom">
                        <Link to={'/'} className="home__nav-item">Start</Link>
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
                            {!user ? (
                                <>
                                    <Link to="/login" className="home__btn">ODDAJ RZECZY</Link>
                                    <Link to="/login" className="home__btn">ZORGANIZUJ ZBIÓRKĘ</Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/oddaj" className="home__btn">ODDAJ RZECZY</Link>
                                    <Link to="/zorganizuj" className="home__btn">ZORGANIZUJ ZBIÓRKĘ</Link>
                                </>
                            )}
                        </div>
                    </section>
                </div>
            </div>
            <ThreeColumns />
            <FourSteps />
            <AboutUs />
            <WeHelp />
        </div>
    );
}

export default Home;