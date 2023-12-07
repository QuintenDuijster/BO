import React, { useEffect } from 'react';
import Header from './Herbruikbaar/Header.tsx';
import Footer from './Herbruikbaar/Footer.tsx';

//CSS
import '../Reusable/PageStyle.css';
import './CSS/OpleidingenEnWorkshops.css';

const OpleidingenEnWorkshops: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum | OpleidingenEnWorkshops';
    }, []);

  return (
        <>
            <Header />

            <main>
                <h1>Dagje weg?</h1>

                <p>
                    We hebben allerlei opties hier op een rijtje gezet dus er is voor iedereen wel een unieke manier om ons museum te beleven!
                </p>

                <div className="Groepsbezoek" id="Bedrijfsuitjes">

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
                </div>

                <div className="Educatie" id="Educatie">

                    <h1>Excursies voor scholen</h1>

                    <p>
                        Ook voor scholen hebben we onze tentoonstellingen beschikbaar gesteld.
                        Nxt is jouw venster naar de toekomst, waar je kunt zien hoe ideeën en innovaties de wereld vormgeven.
                        Duik in de interactieve en inspirerende presentaties, bekijk onze <a href="./OverNxt" title="Over onze tentoonstellingen">tentoonstellingen</a> en laat je meeslepen.
                    
                        <a href="./Tickets" title="Hbo, mbo en universiteit">Groepsbezoek</a> voor mbo-, hbo- en universitaire studenten                           Of kom je op bezoek met een schoolklas? Boek
                        <a href="./Tickets" title="Basis- en middelbarescholen"> hier </a> je groepsboekingen van scholieren in het basis- en voortgezet onderwijs.
                    </p>
                </div>

                <div className="Workshops" id="Workshops">

                    <h1> Workshops </h1>

                    <p>
                        Binnen deze ruimte nodigen we alle denkers, makers, luisteraars, scheppers en vernietigers uit om ons te vergezellen in onze wil te onderzoeken,
                        te laten zien en te debatteren over wat de toekomst te bieden heeft.
                        We streven ernaar om leren op het gebied van createch toegankelijker te maken en onze gemeenschap van nieuwe vaardigheden te voorzien.
                    </p>
                    <h4>Onze workshops</h4>
                    <ul>
                        <li>
                            <p>
                                <a href="WorkshopSlowLooking">Slow Looking</a>
                                De Slow Looking Workshop is een oefening om de manier waarop we naar de wereld om ons heen kijken te vertragen
                                en om zo diepgaand leren over verschillende onderwerpen te stimuleren.
                            </p>
                        </li>
                        <li>
                            <p>
                                <a href="WorkshopFilterCreation">Filter Creation</a>
                                We kennen en gebruiken ze allemaal: Augmented Reality Filters.
                                In deze workshop leer je om je eigen filter te maken en zo je verhaal te vertellen in een AR-omgeving.
                            </p>
                        </li>
                        <li>
                            <p>
                                <a href="WorkshopCustomisedChange">Customised Change</a>
                                Soms moet er iets gebeuren. Om de energie erin te krijgen, weer geïnspireerd te raken of tot actie over te gaan.
                                Wij vertrouwen hierbij op de kracht van kunst. Het doorbreekt je dagelijks denken en dat geeft ruimte voor nieuwe perspectieven.
                                En wij stellen rake vragen. Het doel? Een nieuwe mindset voor duurzame verandering.
                                Hedendaagse kunst schetst een beeld van de toekomst of bevraagt het heden. Het nodigt uit tot reflectie. Dat is zeker.
                                Wij vinden de tentoonstelling die aansluit bij de vragen van jouw organisatie. En gaan voor een onderscheidend verandertraject.
                            </p>
                        </li>
                        <li>
                            <p>
                                <a href="WorkshopToekomstverkenning">Toekomstverkenning</a>
                                Duik op een speelse manier in de toekomst. Laat je, met kunst als katalysator, verbazen en inspireren door haar eindeloze mogelijkheden.
                                In de kunst ligt de toekomst al voor het oprapen en word je uitgedaagd om je dagelijks denken los te laten. Leer om grootser te denken, in kansen en vanuit nieuwe perspectieven.
                                Vanuit deze nieuwe mindset vertaal je de uitkomsten naar jouw eigen organisatie.
                                Op welke manier kan de toekomst de huidige koers van jouw organisatie beïnvloeden? Kies het pad dat je wilt bewandelen en zet de eerste stap voorwaarts.
                            </p>
                        </li>
                    </ul>
                </div>
            </main >


            <Footer />
        </>
    );
};

export default OpleidingenEnWorkshops;