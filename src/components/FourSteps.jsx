import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase-config.js";

function FourSteps() {

    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, []);

    return (
        <div className="container">
            <div className="four-steps__wrapper">
                <h3 className="four-steps__header">Wystarczą 4 proste kroki</h3>
                <img src="src/assets/Decoration.svg" className="four-steps__decoration"></img>
                <div className="four-steps__steps">
                    <div className="four-steps__single__step">
                        <img src="src/assets/Icon-1.svg" alt="" className="four-steps__icon"/>
                        <h5 className="four-steps__title">Wybierz rzeczy</h5>
                        <p className="four-steps__description">ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="four-steps__single__step">
                        <img src="src/assets/Icon-2.svg" alt="" className="four-steps__icon"/>
                        <h5 className="four-steps__title">Spakuj je</h5>
                        <p className="four-steps__description">skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="four-steps__single__step">
                        <img src="src/assets/Icon-3.svg" alt="" className="four-steps__icon"/>
                        <h5 className="four-steps__title">Zdecyduj komu chcesz pomóc</h5>
                        <p className="four-steps__description">wybierz zaufane miejsce</p>
                    </div>
                    <div className="four-steps__single__step">
                        <img src="src/assets/Icon-4.svg" alt="" className="four-steps__icon"/>
                        <h5 className="four-steps__title">Zamów kuriera</h5>
                        <p className="four-steps__description">kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                {!user ? (
                    <>
                        <Link to="/login" className="four-steps__btn">ODDAJ RZECZY</Link>
                    </>
                ) : (
                    <>
                        <Link to="/oddaj" className="four-steps__btn">ODDAJ RZECZY</Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default FourSteps;