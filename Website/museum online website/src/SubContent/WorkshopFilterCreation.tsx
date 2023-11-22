import React from 'react';
import Header from '../Herbruikbaar/Header.tsx';
import Footer from '../Herbruikbaar/Footer.tsx';

const WorkshopFilterCreation: React.FC = () =>
{
    return (
        <div className="FilterCreation">
            <Header />
            <main>
                <div className="Info">
                    <h2>WHAT WILL YOU GET UP TO?</h2>
                    <ul>
                        <li>
                            Introduction Lecture on AR filters and masks used in social media, the arts, and various cultures, given by specialists in the field.                           
                        </li>
                        <li>
                            Museum exhibition visit – explore connection to the 10 large scale new media artworks in the current exhibition: ‘Life in a Different Resolution’ and Realtime
                        </li>
                        <li>
                            AR Filter creation workshop in “Lensstudio” (software)
                        </li>
                        <div className="WhatToLearn">
                            <h2>WAT GA JE LEREN?</h2>

                            <ul>
                                <li>
                                    Software vaardigheden en AR-filter maken met Lens Studio
                                </li>
                                <li>
                                    Kritisch reflecteren op het gebruik van gezichtsfilters en maskers
                                </li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </main>
        <Footer/>
        </div>
    );
};

export default WorkshopFilterCreation;