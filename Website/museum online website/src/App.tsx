import React from 'react';
import './css/App.css';
import './Herbruikbaar/hoverLink.css';
import './Herbruikbaar/pageStyle.css';
import Header from './Herbruikbaar/Header.tsx';
import Footer from './Herbruikbaar/Footer.tsx';

const App: React.FC = () =>
{
    return (
        <>
            <Header />

            <main>
                <div>
                    <img className="Background" src="Images/AppBackground.png" alt="Example" />
                    <article>
                        <h1>Nxt Museum</h1>
                        <p>
                            Het eerste museum in Nederland dat zich volledig richt op mediakunst. <br />
                            Ontdek grootschalige, digitale kunstinstallaties die je blik verruimen <br />
                            en de zintuigen op scherp stellen. De kunst van morgen, vandaag.

                        </p>
                    </article>
                </div>
                <div>
                    <div>
                        <h2>Wat is Nxt?</h2>
                        <p>
                            Nxt Museum is het eerste museum in Nederland dat zich volledig richt op mediakunst.<br />
                            We exposeren kunstwerken die gebruik maken van moderne technologieen van het heden en van de toekomst.<br />
                            Omdat kunst de tijdsgeest weerspiegelt,<br />
                            geloven wij dat de meest innovatieve kunst ons de mogelijkheid geeft om op de impact van technologische ontwikkelingen te reflecteren.<br />
                            Een moment van bezinning in een realiteit die alsmaar sneller doorontwikkelt.
                        </p>
                        <a>Tentoonstellingen</a>
                    </div>
                    <div>
                        <h2>Openingstijden</h2>
                        <ul>
                            <li>Dinsdag: 10:30 - 20:30</li>
                            <li>Woensdag: 11:00 - 21:30</li>
                            <li>Donderdag: 10:30 - 22:30</li>
                            <li>Zaterdag: 10:30 - 20:30</li>
                            <li>Zondag: 10:30 - 22:30</li>
                        </ul>
                        <a>Contact</a>
                    </div>
                    <div>
                        <h2>De ruimte</h2>
                        <p>
                            Het museum is gevestigd in een voormalige productiestudio in het hart van Amsterdam-Noord - een plek die zich bij uitstek leent voor het ontdekken,<br />
                            maken en tentoonstellen van mediakunst.<br />
                            Deze vorm van kunst experimenteert met technologische mogelijkheden en toepassingen; dynamisch en niet gebonden aan een vorm.<br />
                            Onze  ruimte biedt een broedplaats voor deze vorm van kunst; een plek waar verschillende kunststromingen en wetenschappen samenkomen en tentoongesteld kunnen worden.<br />
                            Een plek voor live performances, educatie, creatie, zang, dans en meer.
                        </p>
                        <a>Meer Over Nxt</a>
                    </div>
                    <div>
                        <h2>Onze missie</h2>
                        <p>
                            Het is onze missie om vooruitstrevende vormen van creativiteit te stimuleren.<br />
                            Wij zien de toekomst als een van de meest fascinerende concepten van het menselijk brein.<br />
                            Het is een onuitputtelijke bron van inspiratie die ons in de greep houdt en de vraag oproept: 'What`s Nxt?'.<br />
                            Met het oog op technologische en sociale ontwikkelingen is deze vraag een groter mysterie dan ooit tevoren.<br />
                            Ga je mee op zoek naar het antwoord?
                        </p>
                        <a>Meer Over Nxt</a>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default App;