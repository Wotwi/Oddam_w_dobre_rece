import React from 'react';

function Register() {
    return (
        <div className="container">
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
            <section className="login__wrapper">
                <h1 className="login__header">Zaloguj się</h1>
                <img src="src/assets/Decoration.svg" alt="" className="login__decoration"/>
                <form action="" className="login__form">
                    <label htmlFor="login__email" className="login__label">Email</label>
                    <input type="email" id="login__email" className="login__input"/>
                    <label htmlFor="login__password" className="login__label">Hasło</label>
                    <input type="password" id="login__password" className="login__input"/>
                    <label htmlFor="login__password" className="login__label">Powtórz hasło</label>
                    <input type="password" id="login__password" className="login__input"/>
                </form>
                <span className="login__buttons">
                        <button className="login__login-btn">Zaloguj się</button>
                        <button className="login__register-btn">Załóż konto</button>
                    </span>
            </section>
        </div>
    );
}

export default Register;