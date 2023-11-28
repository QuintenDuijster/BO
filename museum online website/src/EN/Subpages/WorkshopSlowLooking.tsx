import React from 'react';
import '../Herbruikbaar/pageStyle.css';
import Header from '../Reusable/Header.tsx';
import Footer from '../Reusable/Footer.tsx';


const WorkshopSlowLooking: React.FC = () => {
    return (
        <div className="Workshop">

            <Header />
            <main>
                <div className="Info">
                    <h1>Slow Looking</h1>
                    <p>
                        <img src="Images/WorkshopImg/NXT_Random-International_PR_Riccardo-De-Vecchi-photographer-12-1024x778.jpg" alt="The developer isn't good at coding here should be an image" />
                    </p>
                    <div className="VerwachtingWorkshop">
                        <h2>WAT TE VERWACHTEN?</h2>
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
                        <h1>WAT GA JE LEREN?</h1>
                        <ul>
                            <li>
                                Vertraag: om de wereld goed te observeren
                                Maak kennis met de concepten van aandachtig kijken en zorgvuldig luisteren
                                Ontdek hoe je past in grotere (sociale) constructies zoals school, sport of werk
                            </li>
                            <li>
                                Deel: wissel verhalen uit over mensen, plaats en identiteit
                                Leer hoe je verhalen op een betekenisvolle manier kunt verzamelen en vertellen
                                Maak kennis met verschillende communicatiemodellen en manieren van interactie
                            </li>
                            <li>
                                Leer: over hoe jouw eigen leven in verbinding staat met grotere menselijke verhalen
                                Leer meer over thema’s en technologieën waar je dagelijks mee in aanraking komt en hoe je deze kunt interpreteren
                                Krijg nieuwe inzichten met betrekking tot je dagelijks leven, gemeenschappen en identiteiten zowel online en offline
                            </li>
                        </ul>
                    </div>
                    <div className="GoodToKnow">
                        <h2>GOED OM TE WETEN:</h2>
                        <ul>
                            <li>
                                4 uur programma in Nxt Museum
                            </li>
                            <li>
                                Voor leiderschapsteams tot 35 personen
                            </li>
                            <li>
                                Programma wordt afgestemd op de relevante thema’s binnen uw organisatie
                            </li>
                        </ul>
                    </div>
                    <div className="Kosten">
                        <h2>KOSTEN (inclusief museumbezoek):</h2>
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
                <Footer />
            </main>
        </div>
    );
};

export default WorkshopSlowLooking;       