import React from 'react';
import Header from '../Herbruikbaar/Header.tsx';
import Footer from '../Herbruikbaar/Footer.tsx';



const WorkshopCustomisedChange: React.FC = () => {
    return (
        <>
            <Header />

            <main className="WorkshopCustomisedChange">
                <div className="Info">
                    <h1>Customised Change</h1>
                    <p>Soms moet er iets gebeuren. Om de energie erin te krijgen, weer geïnspireerd te raken of tot actie over te gaan.
                        Wij vertrouwen hierbij op de kracht van kunst. Het doorbreekt je dagelijks denken en dat geeft ruimte voor nieuwe perspectieven.
                        En wij stellen rake vragen. Het doel? Een nieuwe mindset voor duurzame verandering.

                        Hedendaagse kunst schetst een beeld van de toekomst of bevraagt het heden. Het nodigt uit tot reflectie.
                        Dat is zeker. Wij vinden de tentoonstelling die aansluit bij de vragen van jouw organisatie. En gaan voor een onderscheidend verandertraject.</p>
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
                        <h2>Kosten: (inclusief museumbezoek)</h2>
                        <ul>
                            <li>
                                Basisscholen en middelbare scholen: €175 + €40 per persoon
                            </li>
                            <li>
                                Studenten: €175 + €43/per persoon
                            </li>
                            <li>
                                Bedrijven: €200 + €50/per persoon
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

export default WorkshopCustomisedChange;