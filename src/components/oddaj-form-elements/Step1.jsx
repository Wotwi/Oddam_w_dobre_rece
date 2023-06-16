import React, {useState} from 'react';
import {Link} from "react-router-dom";

function Step1() {

    // input handling
    // Step 1:
    const [isChecked, setIsChecked] = useState('');

    const handleCheckboxChange = (e) => {
        const option = e.target.value;
        setIsChecked(option);
    }
    // Step 2:
    const [isSelected, setIsSelected] = useState('');

    const handleSelectChange = (e) => {
        setIsSelected(e.target.value);
    }
    // Step 3:
    const [citySelected, setCitySelected] = useState('');

    const handleCitySelect = (e) => {
        setCitySelected(e.target.value);
    }

    // ================================================================
    const [optionClicked, setOptionClicked] = useState(false);

    const handleClicked1 = () => {
        setOptionClicked(!optionClicked);
    };
    const divStyles = {
      backgroundColor: optionClicked ? '' : '#FAD648'
    };
    //


    const [selectedOption, setSelectedOption] = useState('Step1');
    const toggleOption = (option) => {
        setSelectedOption(option);
    };

    return (
        <>
            {selectedOption === 'Step1' && <div className="container">

            <div className="form__step-1">

                <div className="important__wrapper">
                    <h3 className="important__header">Ważne!</h3>
                    <p className="important__desc">Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                </div>

                <div className="oddaj-form__step-1 oddaj-form__background">
                    <h4 className="oddaj-form__step">Krok 1/4</h4>
                    <h4 className="oddaj-form__question">Zaznacz co chcesz oddać:</h4>
                    <form action="" className="oddaj-form__answers-1">
                        <span className="single__input">
                            <input
                                className="oddaj-form__checkbox"
                                type="checkbox"
                                id="first__answer"
                                name="first__answer"
                                value="ubrania w dobrym stanie"
                                checked={isChecked === "ubrania w dobrym stanie"}
                                onClick={handleCheckboxChange}
                            />
                            <label className="step-1__label" htmlFor="first__answer">ubrania, które nadają się do ponownego użycia</label>
                        </span>
                        <span className="single__input">
                            <input
                                className="oddaj-form__checkbox"
                                type="checkbox"
                                id="second__answer"
                                name="second__answer"
                                value="ubrania do wyrzucenia"
                                checked={isChecked === "ubrania do wyrzucenia"}
                                onClick={handleCheckboxChange}
                            />
                            <label className="step-1__label" htmlFor="second__answer">ubrania, do wyrzucenia</label>
                        </span>
                        <span className="single__input">
                            <input
                                className="oddaj-form__checkbox"
                                type="checkbox"
                                id="third__answer"
                                name="third__answer"
                                value="zabawki"
                                checked={isChecked === "zabawki"}
                                onClick={handleCheckboxChange}
                            />
                            <label className="step-1__label" htmlFor="third__answer">zabawki</label>
                        </span>
                        <span className="single__input">
                            <input
                                className="oddaj-form__checkbox"
                                type="checkbox"
                                id="fourth__answer"
                                name="fourth__answer"
                                value="ksiązki"
                                checked={isChecked === "ksiązki"}
                                onClick={handleCheckboxChange}
                            />
                            <label className="step-1__label" htmlFor="fourth__answer">książki</label>
                        </span>
                        <span className="single__input">
                            <input
                                className="oddaj-form__checkbox"
                                type="checkbox"
                                id="fifth__answer"
                                name="fifth__answer"
                                value="Inne"
                                checked={isChecked === "Inne"}
                                onClick={handleCheckboxChange}
                            />
                            <label className="step-1__label" htmlFor="fifth__answer">Inne</label>
                        </span>

                        <Link onClick={() => toggleOption('Step2')}><button className="oddaj-form__button">Dalej</button></Link>
                    </form>
                </div>
            </div>

            </div>}

            {/*STEP 2*/}

            {selectedOption === 'Step2' && <div className="container">

                <div className="form__step-2">

                    <div className="important__wrapper">
                        <h3 className="important__header">Ważne!</h3>
                        <p className="important__desc">Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
                    </div>

                    <div className="oddaj-form__step-2 oddaj-form__background">
                        <h4 className="oddaj-form__step">Krok 2/4</h4>
                        <h4 className="oddaj-form__question">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h4>
                        <form action="" className="oddaj-form__answers-2">
                            <span className="oddaj-form__select__wrapper">
                                <label htmlFor="step-2__answer" className="step-2__label">Liczba 60l worków:</label>
                                <select value={isSelected} onChange={handleSelectChange} className="oddaj-form__select" id="step-2__answer">
                                    <option value="" disabled selected>-- wybierz --</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </span>

                            <span className="oddaj-form__button__wrapper">
                                <Link onClick={() => toggleOption('Step1')}><button className="oddaj-form__button">Wstecz</button></Link>
                                <Link onClick={() => toggleOption('Step3')}><button className="oddaj-form__button">Dalej</button></Link>
                            </span>

                        </form>
                    </div>
                </div>
            </div>}

            {/*STEP 3*/}

            {selectedOption === 'Step3' && <div className="container">

                <div className="form__step-3">

                    <div className="important__wrapper">
                        <h3 className="important__header">Ważne!</h3>
                        <h6 className="important__desc">Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje</h6>
                        <h6 className="important__desc">po ich lokalizacji bądź celu ich pomocy.</h6>
                    </div>

                    <div className="oddaj-form__step-3 oddaj-form__background">
                        <h4 className="oddaj-form__step">Krok 3/4</h4>
                        <form action="" className="oddaj-form__answers-3">
                            <span className="oddaj-form__localization">
                                <label className="step-2__localization__label" htmlFor="localization">Lokalizacja:</label>
                                <select value={citySelected} onChange={handleCitySelect} className="step-2__localization__select" name="localization" id="localization">
                                    <option className="step-2__localization__select-option" value="">-- wybierz --</option>
                                    <option className="step-2__localization__select-option" value="Poznań">Poznań</option>
                                    <option className="step-2__localization__select-option" value="Warszawa">Warszawa</option>
                                    <option className="step-2__localization__select-option" value="Kraków">Kraków</option>
                                    <option className="step-2__localization__select-option" value="Wrocław">Wrocław</option>
                                    <option className="step-2__localization__select-option" value="Katowice">Katowice</option>
                                </select>
                            </span>
                            <span className="oddaj-form__choice">
                                <h3 className="oddaj-form__choice__header">Komu chcesz pomóc?</h3>
                                <span className="oddaj-form__elements__wrapper">
                                    <div style={divStyles} onClick={handleClicked1} className="oddaj-form__choice__element">dzieciom</div>
                                    <div style={divStyles} /*onClick={handleClicked}*/ className="oddaj-form__choice__element">samotnym matkom</div>
                                    <div style={divStyles} /*onClick={handleClicked}*/ className="oddaj-form__choice__element">bezdomnym</div>
                                    <div style={divStyles} /*onClick={handleClicked}*/ className="oddaj-form__choice__element">niepełnosprawnym</div>
                                    <div style={divStyles} /*onClick={handleClicked}*/ className="oddaj-form__choice__element">osobom starszym</div>
                                </span>
                            </span>
                            <span className="oddaj-form__organization">
                                <label className="oddaj-form__organization__header" id="organization-input" htmlFor="">Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                                <input className="oddaj-form__organization__input" id="organization-input" type="text"/>
                            </span>

                            <span className="oddaj-form__button__wrapper">
                                <Link onClick={() => toggleOption('Step2')}><button className="oddaj-form__button">Wstecz</button></Link>
                                <Link onClick={() => toggleOption('Step4')}><button className="oddaj-form__button">Dalej</button></Link>
                            </span>

                        </form>
                    </div>
                </div>
            </div>}

            {/*STEP 4*/}

            {selectedOption === 'Step4' && <div className="container">

                <div className="form__step-4">

                    <div className="important__wrapper">
                        <h3 className="important__header">Ważne!</h3>
                        <p className="important__desc">Podaj adres oraz termin odbioru rzeczy.</p>
                    </div>

                    <div className="oddaj-form__step-4 oddaj-form__background">
                        <h4 className="oddaj-form__step">Krok 4/4</h4>
                        <h4 className="oddaj-form__question">Podaj adres oraz termin odbioru rzeczy przez kuriera</h4>
                        <form action="" className="oddaj-form__answers-4">

                        <span className="oddaj-form__address">
                            <h5 className="address__header">Adres odbioru:</h5>

                            <span className="span-position">
                                <label htmlFor="street" className="step-4__label">Ulica</label>
                                <input type="text" id="street" className="step-4__input"/>
                            </span>
                            <span className="span-position">
                                <label htmlFor="city" className="step-4__label">Miasto</label>
                                <input type="text" id="city" className="step-4__input"/>
                            </span>
                            <span className="span-position">
                                <label htmlFor="post" className="step-4__label">Kod <br /> pocztowy</label>
                                <input type="text" id="post" className="step-4__input"/>
                            </span>
                            <span className="span-position">
                                <label htmlFor="phone" className="step-4__label">Numer <br /> telefonu</label>
                                <input type="text" id="phone" className="step-4__input"/>
                            </span>

                        </span>
                        <span className="oddaj-form__time">
                            <h5 className="address__header">Termin odbioru</h5>

                            <span className="span-position">
                                <label htmlFor="date" className="step-4__label">Data</label>
                                <input type="text" id="date" className="step-4__input"/>
                            </span>
                            <span className="span-position">
                                <label htmlFor="hour" className="step-4__label">Godzina</label>
                                <input type="text" id="hour" className="step-4__input"/>
                            </span>
                            <span className="span-position">
                                <label htmlFor="date" className="step-4__label">Uwagi <br /> dla kuriera</label>
                                <textarea id="date" className="step-4__input textarea" cols="30" rows="10"></textarea>
                            </span>
                        </span>

                        </form>
                        <span className="oddaj-form__button__wrapper">
                            <Link onClick={() => toggleOption('Step3')}><button className="oddaj-form__button">Wstecz</button></Link>
                            <Link onClick={() => toggleOption('Summary')}><button className="oddaj-form__button">Dalej</button></Link>
                        </span>
                    </div>
                </div>
            </div>}

            {/*SUMMARY*/}

            {selectedOption === 'Summary' && <div className="container">

            <div className="oddaj-form__background">

                <h3 className="summary__header">Podsumowanie Twojej darowizny</h3>
                <h5 className="summary__subheader">Oddajesz:</h5>
                <span className="summary__short">
                    <img src="src/assets/Icon-1.svg" alt="" className="summary__icon"/>
                    <p className="summary__short summary__short-text">{isSelected} worki, {isChecked}</p>
                </span>
                <span className="summary__short">
                    <img src="src/assets/Icon-4.svg" alt="" className="summary__icon"/>
                    <p className="summary__short-text">dla lokalizacji: {citySelected}</p>
                </span>

                <span className="summary__data">
                    <span className="summary__wrapper">
                        <h5 className="summary__subheader">Adres odbioru:</h5>

                        <span className="span-position">
                            <p className="summary__txt">Ulica</p>
                            <p className="summary__txt"></p>
                        </span>
                        <span className="span-position">
                            <p className="summary__txt">Miasto</p>
                            <p className="summary__txt"></p>
                        </span>
                        <span className="span-position">
                            <p className="summary__txt">Kod <br /> Pocztowy</p>
                            <p className="summary__txt"></p>
                        </span>
                        <span className="span-position">
                            <p className="summary__txt">Numer <br /> telefonu</p>
                            <p className="summary__txt"></p>
                        </span>
                    </span>

                    <span className="summary__wrapper">
                        <h5 className="summary__subheader">Termin odbioru:</h5>

                        <span className="span-position">
                            <p className="summary__txt">Data</p>
                            <p className="summary__txt"></p>
                        </span>
                        <span className="span-position">
                            <p className="summary__txt">Godzina</p>
                            <p className="summary__txt"></p>
                        </span>
                        <span className="span-position">
                            <p className="summary__txt">Uwagi <br /> dla kuriera</p>
                            <p className="summary__txt"></p>
                        </span>

                    </span>

                    <span className="summary__button__wrapper">
                        <Link onClick={() => toggleOption('Step4')}><button className="summary__button summary__button-back">Wstecz</button></Link>
                        <Link onClick={() => toggleOption('Summary')}><button className="summary__button summary__button-confirm">Potwierdzam</button></Link>
                    </span>
                </span>


            </div>


            </div>}
        </>
    );
}

export default Step1;