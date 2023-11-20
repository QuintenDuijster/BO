import React from 'react';
import './App.css';
import Header from './Herbruikbaar/Header.tsx';
import Footer from './Herbruikbaar/Footer.tsx';


const App: React.FC = () =>
{
    return (
        <div className="App">
            <Header />
            <main>
                <div className="Header">
                    <h2>Nxt Museum</h2>
                    <p>introductie text</p>
                    <canvas className="slideShow" />
                </div>
                <div className="info">
                    <div className="infoBox">
                        <h2>Informatie over nxt</h2>
                        <p>Waarom de tentoonstellingen houden/ motivatie </p>
                        <a>Tentoonstellingen</a>
                    </div>
                    <div className="infoBox">
                        <h2>Openingstijden</h2>
                        <ul>
                            <li>Maandag: 10:00/20:00</li>
                            <li>Dinsdag: 10:00/20:00</li>
                            <li>Woensdag: 10:00/20:00</li>
                            <li>Donderdag: 10:00/20:00</li>
                            <li>Vrijdag: 10:00/20:00</li>
                            <li>Zaterdag: 10:00/20:00</li>
                            <li>Zondag: 10:00/20:00</li>
                        </ul>
                        <a>Contact</a>
                    </div>
                </div>
                <div className="info">
                    <div className="infoBox">
                        <h2>Informatie over nxt</h2>
                        <p>Toekomst/visie nxt</p>
                        <a>Meer Over Nxt</a>
                    </div>
                    <div className="infoBox">
                        <h2>Informatie over nxt</h2>
                        <p>Bouw/open jaar</p>
                        <a>Meer Over Nxt</a>
                    </div>
                </div>
                <div className="reviews">
                    <div className="review">
                        <h3>review</h3>
                        <p>text</p>
                    </div>
                    <div className="review">
                        <h3>review</h3>
                        <p>text</p>
                    </div>
                    <div className="review">
                        <h3>review</h3>
                        <p>text</p>
                    </div>
                    <a>reviews</a>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;