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
                        In this workshop, you explore a single artwork through a series of guided activities, including close looking,
                        careful listening, creative writing – and drawing. Connect your findings to bigger systems and integrate the concept into your own learning
                        and innovation process. This workshop is set up to empower anyone to take the time to look slow in a world of fast information.
                    </p>
                    <div className="VerwachtingWorkshop">
                        <h2>What will you get up to?</h2>
                        <ul>
                            <li>
                                Introduction
                            </li>
                            <li>
                                Museum exhibition visit – explore connection to the 10 large scale new media artworks in the current exhibition: ‘Life in a Different Resolution’ and Realtime
                            </li>
                            <li>
                                Workshop Slow Looking 6 steps at one specific installation in the current exhibition.
                            </li>
                        </ul>
                    </div>
                    <div className="WhatToLearn">
                        <h1>What all learn?</h1>
                        <ul>
                            <li>
                                Slow down: to observe the world carefully
                                Encounter the concepts of close looking and careful listening
                                Explore how you fit into bigger (social) constructs like school, sports, or work
                            </li>
                            <li>
                                Share: Exchange stories about people, place, and identity
                                Learn how to collect and tell stories in a meaningful way
                                Get to know different communication models and modes of interaction
                            </li>
                            <li>
                                Reflect: on how your own live connects to bigger human stories
                                Learn more about themes and technologies that you use every day – and how to read them
                                Gain new insights into your everyday lives, communities, and identities – on- and offline
                            </li>
                        </ul>
                    </div>
                    <div className="GoodToKnow">
                        <h2>Good to know:</h2>
                        <ul>
                            <li>
                                Max 30 participants per workshop
                            </li>
                            <li>
                                Programme of 2h 45
                            </li>
                            <li>
                                This workshop is for students of all ages (different set up for under 12 years old)
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
                <Footer />
            </main>
        </div>
    );
};

export default WorkshopSlowLooking;       