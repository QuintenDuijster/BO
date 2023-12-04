import React from 'react';
import Header from '../Reusable/Header.tsx';
import Footer from '../Reusable/Footer.tsx';



const WorkshopCustomisedChange: React.FC = () => {
    return (
        <div className="Workshop">

            <Header />
            <main>
                <div className="Info">
                    <h1>Customised Change</h1>
                    <p>Led by AIM AT ART’s consultants, teams are stimulated to reflect and align on the questions facing your organisation, and aim for a distinctive change process.</p>
                    <div className="VerwachtingWorkshop">
                        <h2>What to expect?</h2>
                        <ul>
                            <li>
                                Discover & Design: How has your current organisation been shaped, and where do you want to go?
                            </li>
                            <li>
                                Create & Commit: Creative brainstorm to establish ambitions and to master your own new story
                            </li>
                            <li>
                                Engage & Act: How do you establish your new behaviour within the organisation, and how do you challenge yourself to continue innovating?
                            </li>
                        </ul>
                    </div>
                    <div className="WhatToLearn">
                        <h2>Good to know:</h2>
                        <ul>
                            <li>
                                4 hour program at Nxt Museum
                            </li>
                            <li>
                                For leadership teams of up to 35 people
                            </li>
                            <li>
                                Program is tailored to the relevant themes within your organisation
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

        </div>
    );
};

export default WorkshopCustomisedChange;