import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../firebase-config.js";
import Step1 from "./oddaj-form-elements/Step1.jsx";

function OddajRzeczy() {

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
            <div className="home-oddaj">
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
                <section className="oddaj__content">
                    <h3 className="oddaj__header">Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h3>
                    <img src="src/assets/Decoration.svg" className="home__header-decoration"/>
                    <h4 className="oddaj__header">Wystarczą 4 proste kroki:</h4>
                    <div className="oddaj__squares__wrapper">
                            <span className="oddaj__span first-square">
                                <h6 className="oddaj__number">1</h6>
                                <h6 className="oddaj__square-text">Wybierz</h6>
                                <h6 className="oddaj__square-text">rzeczy</h6>
                            </span>
                        <span className="oddaj__span second-square">
                                <h6 className="oddaj__number">2</h6>
                                <h6 className="oddaj__square-text">Spakuj je</h6>
                                <h6 className="oddaj__square-text">w worki</h6>
                            </span>
                        <span className="oddaj__span third-square">
                                <h6 className="oddaj__number">3</h6>
                                <h6 className="oddaj__square-text">Wybierz</h6>
                                <h6 className="oddaj__square-text">fundację</h6>
                            </span>
                        <span className="oddaj__span fourth-square">
                                <h6 className="oddaj__number">4</h6>
                                <h6 className="oddaj__square-text">Zamów</h6>
                                <h6 className="oddaj__square-text">kuriera</h6>
                            </span>
                    </div>
                </section>
            </div>

            <Step1 />

            <div className="contact__wrapper">
                <div className="contact__content">
                    <h3 className="contact__header">Skontaktuj się z nami</h3>
                    <img src="src/assets/Decoration.svg" alt="" className="contact__decoration"/>
                    <form action="" className="contact__form">
                            <span className="both__inputs">
                                <span className="input__label-wrapper">
                                    <label className="contact__form__label" htmlFor="">Wpisz swoje imię</label>
                                    <input className="contact__form__name" id="name" type="text"
                                           placeholder="Krzysztof"/>
                                </span>
                                <span className="input__label-wrapper">
                                    <label className="contact__form__label" htmlFor="">Wpisz swój email</label>
                                    <input className="contact__form__email" id="email" type="text"
                                           placeholder="abc@xyz.pl"/>
                                </span>
                            </span>
                        <label className="contact__form__label-message" htmlFor="">Wpisz swoją wiadomość</label>
                        <textarea className="contact__form__message" name="message" id="message" rows="4"
                                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
                        <button className="contact__form__button" type="submit">Wyślij</button>
                    </form>
                </div>
            </div>
            <footer className="footer">
                <span></span>
                <h6 className="footer__header">Copyright by Coders Lab</h6>
                <span className="footer__icons">
                        <img className="footer__icon" src="src/assets/Facebook.svg" alt=""/>
                        <img className="footer__icon" src="src/assets/Instagram.svg" alt=""/>
                    </span>
            </footer>
        </div>
    );
}

export default OddajRzeczy;