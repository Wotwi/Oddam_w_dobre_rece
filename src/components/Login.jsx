import React, {useEffect, useState} from 'react';
import {signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import {auth} from '../firebase-config';
import {Link, useNavigate} from "react-router-dom";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const handleInput = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error.message);
        }
        navigate('/');
    }

    const toRegisterPage = () => {
        navigate('/register');
    }

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
            <section className="login__wrapper">
                <h1 className="login__header">Zaloguj się</h1>
                <img src="src/assets/Decoration.svg" alt="" className="login__decoration"/>
                <form action="" className="login__form">
                    <label htmlFor="login__email" className="login__label">Email</label>
                    <input
                        type="email"
                        id="login__email"
                        className="login__input"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="login__password" className="login__label">Hasło</label>
                    <input
                        type="password"
                        id="login__password"
                        className="login__input"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </form>
                <span className="login__buttons">
                    <button onClick={toRegisterPage} className="login__left-btn">Załóż konto</button>
                    <button onClick={handleInput} className="login__right-btn">Zaloguj się</button>
                </span>
            </section>
        </div>
    );
}

export default Login;