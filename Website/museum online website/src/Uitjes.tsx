import React from 'react';
import './Tickets.css';
import Header from './Herbruikbaar/Header.tsx';
import Footer from './Herbruikbaar/Footer.tsx';


const Uitjes: React.FC = () => {
    return (
        <div className="Uitjes">
            <Header />

            <main>
                <h1>Dagje weg?</h1>

                <p>
                    We hebben allerlei opties hier op een rijtje gezet dus er is voor iedereen wel een unieke manier om ons museum te beleven!
                </p>

                <div className="Groepsbezoek">

                    <h1>Groepsbezoek</h1>

                    <p>
                        Speciale momenten zijn het mooist als ze gedeeld worden!
                        Bezoek onze tentoonstellingen met vrienden of teamgenoten en laat je meevoeren naar geheel nieuwe dimensies.
                        Duik in meeslepende kunstinstallaties die creatieve ideeën combineren met technologische innovatie.
                        Een bezoek aan Nxt zal de geest betoveren, zal zorgen voor inspiratie en zal een creatieve boost geven aan jou, je vrienden of je team.
                        <a href="./Tickets" title="Tickets bestellen" target="_blank">Go to tickets</a>
                        <a href="./OverNxt" title="Meer over het Nxt museum">Over ons</a>
                        <a href="./Faq" title="Veelgestelde vragen">Faq</a>
                    </p>
                    p</div>

                <div className="Educatie">

                    <h1>Excursies voor scholen</h1>

                    <p>
                        Ook voor scholen hebben we onze tentoonstellingen beschikbaar gesteld.
                        Nxt is jouw venster naar de toekomst, waar je kunt zien hoe ideeën en innovaties de wereld vormgeven.
                        Duik in de interactieve en inspirerende presentaties, bekijk onze <a href="./OverNxt" title="Over onze tentoonstellingen">tentoonstellingen</a> en laat je meeslepen.

                        <a href="./Tickets" title="Hbo, mbo en universiteit">Groepsbezoek</a> voor mbo-, hbo- en universitaire studenten                           Of kom je op bezoek met een schoolklas? Boek
                        <a href="./Tickets" title="Basis- en middelbarescholen"> hier </a> je groepsboekingen van scholieren in het basis- en voortgezet onderwijs.
                    </p>
                </div>

                <div className="Workshops">

                    <h1>
                        Workshops
                    </h1>

                    <p>
                        Binnen deze ruimte nodigen we alle denkers, makers, luisteraars, scheppers en vernietigers uit om ons te vergezellen in onze wil te onderzoeken,
                        te laten zien en te debatteren over wat de toekomst te bieden heeft.
                        We streven ernaar om leren op het gebied van createch toegankelijker te maken en onze gemeenschap van nieuwe vaardigheden te voorzien.

                        <h4>Onze workshops</h4>
                        <ul>
                            <li>
                                <p>
                                    <a href="SubContent/Workshop">Slow Looking</a>
                                    De Slow Looking Workshop is een oefening om de manier waarop we naar de wereld om ons heen kijken te vertragen
                                    en om zo diepgaand leren over verschillende onderwerpen te stimuleren.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <a href="Subcontent/Workshop1">Filter creation</a>
                                    We kennen en gebruiken ze allemaal: Augmented Reality Filters.
                                    In deze workshop leer je om je eigen filter te maken en zo je verhaal te vertellen in een AR-omgeving.
                                </p>
                            </li>
                        </ul>

                    </p>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Uitjes;