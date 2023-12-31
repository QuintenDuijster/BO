import React from 'react';
import Header from '../Herbruikbaar/Header.tsx';
import Footer from '../Herbruikbaar/Footer.tsx';

const WorkshopFilterCreation: React.FC = () => {
    return (
        <div className="FilterCreation">
            <Header />
            <main>
                <div className="Info">
                    <h1>Filter creation</h1>
                    <p></p>
                    <div className="VerwachtingWorkshop">
                        <h2>WAT KUN JE VERWACHTEN?</h2>
                        <ul>
                            <li>
                                Introductie door vakspecialisten over AR-filters en het gebruik van maskers in sociale media, kunst en verschillende culturen.
                            </li>
                            <li>
                                Museumbezoek - ontdek de verbinding met de tien grootschalige nieuwe media kunstwerken in de huidige tentoonstelling: UFO-Unidentified Fluid Other
                            </li>
                            <li>
                                Workshop AR-filter maken in Lens Studio (software).
                            </li>
                        </ul>
                    </div>
                    <div className="WhatToLearn">
                        <h2>WAT GA JE LEREN?</h2>

                        <ul>
                            <li>
                                Software vaardigheden en AR-filter maken met Lens Studio
                            </li>
                            <li>
                                Kritisch reflecteren op het gebruik van gezichtsfilters en maskers
                            </li>
                            <li>
                                De geschiedenis en theorie van maskeren
                            </li>
                            <li>
                                Creatieve expressie door middel van gezichtsfilters
                            </li>
                            <li>
                                De impact van nieuwe technologie�n op de samenleving en cultuur
                            </li>
                        </ul>
                    </div>
                    <div className="GoodToKnow">
                        <h2>GOED OM TE WETEN</h2>
                        <ul>
                            <li>
                                Max 30 leerlingen/studenten per workshop
                            </li>
                            <li>
                                Programma van vier uur (0.5 uur introductie, 1 uur museumbezoek, 2.5 uur workshop)
                            </li>
                            <li>
                                Neem je eigen laptop mee
                            </li>
                        </ul>
                    </div>
                    <div className="Kosten">
                        <h2>KOSTEN: (inclusief museumbezoek)</h2>
                        <ul>
                            <li>
                                Basisscholen en middelbare scholen: �175 + �40 per persoon
                            </li>
                            <li>
                                Studenten: �175 + �43/per persoon
                            </li>
                            <li>
                                Bedrijven: �200 + �50/per persoon
                            </li>
                        </ul>
                    </div>
                </div>
                //Form voor het aanmelden van workshop
            </main>
            <Footer />
        </div>
    );
};

export default WorkshopFilterCreation;