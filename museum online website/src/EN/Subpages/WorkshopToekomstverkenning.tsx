import React from 'react';
import Header from '../Reusable/Header.tsx';
import Footer from '../Reusable/Footer.tsx';

const WorkshopToekomstverkenning: React.FC = () => {
    return (
        <>

            <Header />
            <main className="WorkshopToekomstverkenning">
                <div className="Info">
                    <h1>Customised Change</h1>
                    <p></p>
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
                        <h2>Costs:</h2>
                        <ul>
                            <li>
                                Elementary schools & Highschools:  130€ + 25€/per person
                            </li>
                            <li>
                                Students: 130€ + 28€/per person
                            </li>
                            <li>
                                Companies: 130€ + 39,75€/per person
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