import React from 'react';

function Contact() {
    return (
        <div className="container">
            <div className="contact__wrapper">
                <div className="contact__content">
                    <h3 className="contact__header">Skontaktuj się z nami</h3>
                    <img src="src/assets/Decoration.svg" alt="" className="contact__decoration"/>
                    <form action="" className="contact__form">
                        <span className="both__inputs">
                            <span className="input__label-wrapper">
                                <label className="contact__form__label" htmlFor="">Wpisz swoje imię</label>
                                <input className="contact__form__name" id="name" type="text" placeholder="Krzysztof"/>
                            </span>
                            <span className="input__label-wrapper">
                                <label className="contact__form__label" htmlFor="">Wpisz swój email</label>
                                <input className="contact__form__email" id="email" type="text" placeholder="abc@xyz.pl"/>
                            </span>
                        </span>
                        <label className="contact__form__label-message" htmlFor="">Wpisz swoją wiadomość</label>
                        <textarea className="contact__form__message" name="message" id="message" rows="4" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
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

export default Contact;