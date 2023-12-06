import React from 'react';
import Header from '../Herbruikbaar/Header.tsx';
import Footer from '../Herbruikbaar/Footer.tsx';


const WorkshopToekomstverkenning: React.FC = () => {
    return (
        <>

            <Header />
            <main className="Workshop">
                <div className="Info">
                    <h1>Customised Change</h1>
                    <p>Duik op een speelse manier in de toekomst. Laat je, met kunst als katalysator, verbazen en inspireren door haar eindeloze mogelijkheden.
                        In de kunst ligt de toekomst al voor het oprapen en word je uitgedaagd om je dagelijks denken los te laten. Leer om grootser te denken,
                        in kansen en vanuit nieuwe perspectieven. Vanuit deze nieuwe mindset vertaal je de uitkomsten naar jouw eigen organisatie.

                        Op welke manier kan de toekomst de huidige koers van jouw organisatie beïnvloeden? Kies het pad dat je wilt bewandelen en zet de eerste stap voorwaarts.</p>
                    <div className="VerwachtingWorkshop">
                        <h2>Wat te verwachten?</h2>
                        <ul>
                            <li>
                                Discover & Design: Hoe is uw huidige organisatie vormgegeven en waar wilt u naartoe?
                            </li>
                            <li>
                                Create & Commit: Creatief brainstormen om ambities vast te stellen en je eigen nieuwe verhaal onder de knie te krijgen
                            </li>
                            <li>
                                Engage & Act: Hoe breng je je nieuwe gedrag binnen de organisatie tot stand en hoe daag je jezelf uit om te blijven innoveren?
                            </li>
                        </ul>
                    </div>
                    <div className="WhatToLearn">
                        <h2>Goed om te weten:</h2>
                        <ul>
                            <li>
                                4 uur programma in Nxt Museum
                            </li>
                            <li>
                                Voor leiderschapsteams tot 35
                            </li>
                            <li>
                                Programma wordt afgestemd op de relevante thema’s binnen uw organisatie
                            </li>
                        </ul>
                    </div>
                    <div className="Kosten">
                        <h2>Kosten (inclusief museumbezoek):</h2>
                        <ul>
                            <li>
                                Basisscholen en middelbare scholen: €130 + €25 per persoon
                            </li>
                            <li>
                                Studenten: €130 + €28 per persoon
                            </li>
                            <li>
                                Bedrijven: €130 + €39,75 per persoon
                            </li>
                        </ul>
                    </div>
                </div>
                //Form voor het aanmelden van workshop
            </main>

            <Footer />
        </>
    );
};

export default WorkshopToekomstverkenning;