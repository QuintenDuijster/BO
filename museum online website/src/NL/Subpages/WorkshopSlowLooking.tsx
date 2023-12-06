import React from 'react';
import '../Herbruikbaar/pageStyle.css';
import Header from '../Herbruikbaar/Header.tsx';
import Footer from '../Herbruikbaar/Footer.tsx';

const WorkshopSlowLooking: React.FC = () => {
    return (
        <>

            <Header />
            <main className="Workshop">
                <div className="Info">
                    <h1>Slow Looking</h1>
                    <p>
                        <img src="Images/WorkshopImg/NXT_Random-International_PR_Riccardo-De-Vecchi-photographer-12-1024x778.jpg" alt="The developer isn't good at coding here should be an image" />
                        In deze workshop verken je één kunstwerk uit het museum door middel van een reeks begeleide activiteiten,
                        waaronder aandachtig kijken en luisteren, creatief schrijven en tekenen. Koppel je bevindingen aan grotere systemen en integreer dit
                        concept in je eigen leer- en innovatieproces. Deze workshop is opgezet met het idee iedereen te stimuleren de tijd te nemen om langzaam
                        te kijken in een wereld van snelle informatie.
                    </p>
                    <div className="VerwachtingWorkshop">
                        <h2>Wat te verwachten?</h2>
                        <ul>
                            <li>
                                Introductie
                            </li>
                            <li>
                                Museumbezoek – ontdek de verbinding met de tien grootschalige nieuwe media kunstwerken in de huidige tentoonstelling: ‘Life in a Different Resolution’ en Realtime
                            </li>
                            <li>
                                Workshop Slow Looking: aan de hand van zes stappen in één van de installaties uit de huidige tentoonstelling duiken.
                            </li>
                        </ul>
                    </div>
                    <div className="WhatToLearn">
                        <h1>Wat ga je leren?</h1>
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
                        <h2>Goed om te weten:</h2>
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
                <Footer />
            </main>
        </>
    );
};

export default WorkshopSlowLooking;       