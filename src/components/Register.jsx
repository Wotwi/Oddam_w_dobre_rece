import React, {useEffect, useState} from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from '../firebase-config';
import {Link, useNavigate} from "react-router-dom";

function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, []);

    const navigate = useNavigate();

    const handleInput = async (e) => {
        e.preventDefault()
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.log(error.message);
        }
        navigate('/');
    };

    const toLoginPage = () => {
        navigate('/login');
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
                <h1 className="login__header">Załóż konto</h1>
                <img src="src/assets/Decoration.svg" alt="" className="login__decoration"/>

                <form onSubmit={handleInput} action="" className="login__form">
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
                    <label htmlFor="login__password-repeated" className="login__label">Powtórz hasło</label>
                    <input
                        type="password"
                        id="login__password-repeated"
                        className="login__input"
                    />
                    <span className="register__buttons">
                        <button onClick={toLoginPage} className="register__left-btn">Zaloguj się</button>
                        <button type="submit" className="register__right-btn">Załóż konto</button>
                    </span>
                </form>
            </section>
        </div>
    );
}

export default Register;