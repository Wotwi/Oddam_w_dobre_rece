import React, {useState} from 'react';
import {Link} from "react-router-dom";

function WeHelp() {

    const [selectedOption, setSelectedOption] = useState('A');
    const [currentPage, setCurrentPage] = useState("1");

    const toggleOption = (option) => {
        setSelectedOption(option);
    };

    const selectPage = (page) => {
        setCurrentPage(page);
    }

    return (
        <div className="container">
            <div className="help__wrapper">
                <h3 className="help__header">Komu pomagamy</h3>
                <img src="src/assets/Decoration.svg" alt="" className="help__decoration"/>
                <span className="help__subjects">
                    <Link onClick={() => toggleOption('A')} className="help__subject">Fundacjom</Link>
                    <Link onClick={() => toggleOption('B')} className="help__subject">Organizacjom pozarządowym</Link>
                    <Link onClick={() => toggleOption('C')} className="help__subject">Lokalnym zbiórkom</Link>
                </span>
                <div className="help__subjects-list">
                    {selectedOption === 'A' && (<div className="help__foundation">
                        <p className="help__subject-desc">W naszej bazie znajdziesz listę zweryfikowanych Fundacji,
                            z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
                            potrzebują.</p>
                        {currentPage === '1' && <div className="help__foundation">
                            <span className="help__subject-option">
                            <span>
                                <h5 className="help__subject-header">Fundacja “Dbam o Zdrowie”</h5>
                                <h6 className="help__subject-subtext">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</h6>
                            </span>
                            <p className="help__subject-alt">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                        </span>
                            <span className="help__subject-option">
                            <span>
                                <h5 className="help__subject-header">Fundacja “Dla dzieci”</h5>
                                <h6 className="help__subject-subtext">Cel i misja: Pomoc dzieciom z ubogich rodzin.</h6>
                            </span>
                            <p className="help__subject-alt">ubrania, meble, zabawki</p>
                        </span>
                            <span className="help__subject-option">
                            <span>
                                <h5 className="help__subject-header">Fundacja “Bez domu”</h5>
                                <h6 className="help__subject-subtext">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</h6>
                            </span>
                            <p className="help__subject-alt">ubrania, jedzenie, ciepłe koce</p>
                        </span>
                        </div> }
                            {currentPage === '2' && <div className="help__foundation">
                                <span className="help__subject-option">
                            <span>
                                <h5 className="help__subject-header">Organizacja “Lorem Ipsum 1”</h5>
                                <h6 className="help__subject-subtext">Quis varius quam quisque id diam vel quam elementum pulvinar.</h6>
                            </span>
                            <p className="help__subject-alt">Egestas, sed, tempus</p>
                            </span>
                            <span className="help__subject-option">
                                <span>
                                    <h5 className="help__subject-header">Organizacja “Lorem Ipsum 2”</h5>
                                    <h6 className="help__subject-subtext">Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</h6>
                                </span>
                                <p className="help__subject-alt">Ut, aliquam, purus, sit, amet</p>
                            </span>
                            <span className="help__subject-option">
                                <span>
                                    <h5 className="help__subject-header">Organizacja “Lorem Ipsum 3”</h5>
                                    <h6 className="help__subject-subtext">Scelerisque in dictum non consectetur a erat nam.</h6>
                                </span>
                                <p className="help__subject-alt">Mi, quis, hendrerit, dolor</p>
                            </span>
                            </div>}
                        {currentPage === '3' && <div className="help__foundation">
                            <span className="help__subject-option">
                            <span>
                                <h5 className="help__subject-header">Organizacja “Lorem Ipsum 4”</h5>
                                <h6 className="help__subject-subtext">Quis varius quam quisque id diam vel quam elementum pulvinar.</h6>
                            </span>
                            <p className="help__subject-alt">Egestas, sed, tempus</p>
                            </span>
                            <span className="help__subject-option">
                                <span>
                                    <h5 className="help__subject-header">Organizacja “Lorem Ipsum 5”</h5>
                                    <h6 className="help__subject-subtext">Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</h6>
                                </span>
                                <p className="help__subject-alt">Ut, aliquam, purus, sit, amet</p>
                            </span>
                            <span className="help__subject-option">
                                <span>
                                    <h5 className="help__subject-header">Organizacja “Lorem Ipsum 6”</h5>
                                    <h6 className="help__subject-subtext">Scelerisque in dictum non consectetur a erat nam.</h6>
                                </span>
                                <p className="help__subject-alt">Mi, quis, hendrerit, dolor</p>
                            </span>
                        </div>}


                        <span className="pages">
                            <Link onClick={() => selectPage('1')} className="page__btn">1</Link>
                            <Link onClick={() => selectPage('2')} className="page__btn">2</Link>
                            <Link onClick={() => selectPage('3')} className="page__btn">3</Link>
                        </span>
                    </div>)}


                    {selectedOption === 'B' && (<div className="help__foundation">
                        <p className="help__subject-desc">W naszej bazie znajdziesz listę zweryfikowanych Fundacji,
                            z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
                            potrzebują.</p>
                        {currentPage === '1' && <div className="help__foundation">
                            <span className="help__subject-option">
                            <span>
                                <h5 className="help__subject-header">Fundacja “Dbam o Zdrowie”</h5>
                                <h6 className="help__subject-subtext">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</h6>
                            </span>
                            <p className="help__subject-alt">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                        </span>
                            <span className="help__subject-option">
                            <span>
                                <h5 className="help__subject-header">Fundacja “Dla dzieci”</h5>
                                <h6 className="help__subject-subtext">Cel i misja: Pomoc dzieciom z ubogich rodzin.</h6>
                            </span>
                            <p className="help__subject-alt">ubrania, meble, zabawki</p>
                        </span>
                            <span className="help__subject-option">
                            <span>
                                <h5 className="help__subject-header">Fundacja “Bez domu”</h5>
                                <h6 className="help__subject-subtext">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</h6>
                            </span>
                            <p className="help__subject-alt">ubrania, jedzenie, ciepłe koce</p>
                        </span>
                        </div> }
                        {currentPage === '2' && <div className="help__foundation">
                                <span className="help__subject-option">
                            <span>
                                <h5 className="help__subject-header">Organizacja “Lorem Ipsum 1”</h5>
                                <h6 className="help__subject-subtext">Quis varius quam quisque id diam vel quam elementum pulvinar.</h6>
                            </span>
                            <p className="help__subject-alt">Egestas, sed, tempus</p>
                            </span>
                            <span className="help__subject-option">
                                <span>
                                    <h5 className="help__subject-header">Organizacja “Lorem Ipsum 2”</h5>
                                    <h6 className="help__subject-subtext">Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</h6>
                                </span>
                                <p className="help__subject-alt">Ut, aliquam, purus, sit, amet</p>
                            </span>
                            <span className="help__subject-option">
                                <span>
                                    <h5 className="help__subject-header">Organizacja “Lorem Ipsum 3”</h5>
                                    <h6 className="help__subject-subtext">Scelerisque in dictum non consectetur a erat nam.</h6>
                                </span>
                                <p className="help__subject-alt">Mi, quis, hendrerit, dolor</p>
                            </span>
                        </div>}
                        {currentPage === '3' && <div className="help__foundation">
                            <span className="help__subject-option">
                            <span>
                                <h5 className="help__subject-header">Organizacja “Lorem Ipsum 4”</h5>
                                <h6 className="help__subject-subtext">Quis varius quam quisque id diam vel quam elementum pulvinar.</h6>
                            </span>
                            <p className="help__subject-alt">Egestas, sed, tempus</p>
                            </span>
                            <span className="help__subject-option">
                                <span>
                                    <h5 className="help__subject-header">Organizacja “Lorem Ipsum 5”</h5>
                                    <h6 className="help__subject-subtext">Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</h6>
                                </span>
                                <p className="help__subject-alt">Ut, aliquam, purus, sit, amet</p>
                            </span>
                        </div>}


                        <span className="pages">
                            <Link onClick={() => selectPage('1')} className="page__btn">1</Link>
                            <Link onClick={() => selectPage('2')} className="page__btn">2</Link>
                            <Link onClick={() => selectPage('3')} className="page__btn">3</Link>
                        </span>
                    </div>)}


                    {selectedOption === 'C' && (<div className="help__foundation">
                        <p className="help__subject-desc">W naszej bazie znajdziesz listę zweryfikowanych Fundacji,
                            z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
                            potrzebują.</p>
                        {currentPage === '1' && <div className="help__foundation">
                            <span className="help__subject-option">
                            <span>
                                <h5 className="help__subject-header">Fundacja “Dbam o Zdrowie”</h5>
                                <h6 className="help__subject-subtext">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</h6>
                            </span>
                            <p className="help__subject-alt">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                        </span>
                            <span className="help__subject-option">
                            <span>
                                <h5 className="help__subject-header">Fundacja “Dla dzieci”</h5>
                                <h6 className="help__subject-subtext">Cel i misja: Pomoc dzieciom z ubogich rodzin.</h6>
                            </span>
                            <p className="help__subject-alt">ubrania, meble, zabawki</p>
                        </span>
                            <span className="help__subject-option">
                            <span>
                                <h5 className="help__subject-header">Fundacja “Bez domu”</h5>
                                <h6 className="help__subject-subtext">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</h6>
                            </span>
                            <p className="help__subject-alt">ubrania, jedzenie, ciepłe koce</p>
                        </span>
                        </div> }
                        {currentPage === '2' && <div className="help__foundation">
                                <span className="help__subject-option">
                            <span>
                                <h5 className="help__subject-header">Organizacja “Lorem Ipsum 1”</h5>
                                <h6 className="help__subject-subtext">Quis varius quam quisque id diam vel quam elementum pulvinar.</h6>
                            </span>
                            <p className="help__subject-alt">Egestas, sed, tempus</p>
                            </span>
                            <span className="help__subject-option">
                                <span>
                                    <h5 className="help__subject-header">Organizacja “Lorem Ipsum 2”</h5>
                                    <h6 className="help__subject-subtext">Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</h6>
                                </span>
                                <p className="help__subject-alt">Ut, aliquam, purus, sit, amet</p>
                            </span>
                            <span className="help__subject-option">
                                <span>
                                    <h5 className="help__subject-header">Organizacja “Lorem Ipsum 3”</h5>
                                    <h6 className="help__subject-subtext">Scelerisque in dictum non consectetur a erat nam.</h6>
                                </span>
                                <p className="help__subject-alt">Mi, quis, hendrerit, dolor</p>
                            </span>
                        </div>}
                        {currentPage === '3' && <div className="help__foundation">
                            <span className="help__subject-option">
                            <span>
                                <h5 className="help__subject-header">Organizacja “Lorem Ipsum 4”</h5>
                                <h6 className="help__subject-subtext">Quis varius quam quisque id diam vel quam elementum pulvinar.</h6>
                            </span>
                            <p className="help__subject-alt">Egestas, sed, tempus</p>
                            </span>
                            <span className="help__subject-option">
                                <span>
                                    <h5 className="help__subject-header">Organizacja “Lorem Ipsum 5”</h5>
                                    <h6 className="help__subject-subtext">Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</h6>
                                </span>
                                <p className="help__subject-alt">Ut, aliquam, purus, sit, amet</p>
                            </span>
                            <span className="help__subject-option">
                                <span>
                                    <h5 className="help__subject-header">Organizacja “Lorem Ipsum 6”</h5>
                                    <h6 className="help__subject-subtext">Scelerisque in dictum non consectetur a erat nam.</h6>
                                </span>
                                <p className="help__subject-alt">Mi, quis, hendrerit, dolor</p>
                            </span>
                        </div>}


                        <span className="pages">
                            <Link onClick={() => selectPage('1')} className="page__btn">1</Link>
                            <Link onClick={() => selectPage('2')} className="page__btn">2</Link>
                            <Link onClick={() => selectPage('3')} className="page__btn">3</Link>
                        </span>
                    </div>)}


                </div>
            </div>
        </div>
    );
}

export default WeHelp;