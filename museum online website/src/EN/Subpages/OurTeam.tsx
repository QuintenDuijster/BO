import React, { useEffect } from 'react';
import Header from '../Reusable/Header.tsx';
import Footer from '../Reusable/Footer.tsx';

//CSS
import '../Reusable/PageStyle.css';
import './CSS/Faq.css';


const OurTeam: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum | OurTeam';
    }, []);

    return (
        <>
            <Header />

            <main>
                <h1>Ons team</h1>

                <table>
                    <tr>
                        <th>Naam</th>
                        <th>Titel</th>
                    </tr>
                    <tr>
                        <td>Aveline Gevaerts </td>
                        <td>Senior Arts & Culture Manager</td>
                    </tr>
                    <tr>
                        <td>Bogomir Doringer</td>
                        <td>Freelance Curator</td>
                    </tr>
                    <tr>
                        <td>Dennis Pranger</td>
                        <td>Head of Operations</td>
                    </tr>
                    <tr>
                        <td>Elif Çelem</td>
                        <td>Marketing Intern</td>
                    </tr>
                    <tr>
                        <td>Ben Ghiggino</td>
                        <td>Finance Manager</td>
                    </tr>
                    <tr>
                        <td>Jesse Damiani</td>
                        <td>Curator and Director of Simulation Literacies</td>
                    </tr>
                    <tr>
                        <td>Julia-Beth Harris</td>
                        <td>Creative Copywriter</td>
                    </tr>
                    <tr>
                        <td>Jurriaan Wesselink</td>
                        <td>Sales & Partnerships Manager</td>
                    </tr>
                    <tr>
                        <td>Lívia Nagy</td>
                        <td>Arts & Culture Coordinator</td>
                    </tr>
                    <tr>
                        <td>Lynn Huet</td>
                        <td>Marketing Executive</td>
                    </tr>
                    <tr>
                        <td>Marie Alexandre Calandra</td>
                        <td>Arts & Culture Intern</td>
                    </tr>
                    <tr>
                        <td>Merel van Helsdingen</td>
                        <td>Founder & Managing Director</td>
                    </tr>
                    <tr>
                        <td>Michiel Willemsen</td>
                        <td>Junior Museum & Office Coordinator</td>
                    </tr>
                    <tr>
                        <td>Miquel Tur</td>
                        <td>Workshops & Tours Coordinator</td>
                    </tr>
                    <tr>
                        <td>Morea van Bossé</td>
                        <td>General Counsel</td>
                    </tr>
                    <tr>
                        <td>Natasha Greenhalgh</td>
                        <td>Co-founder & Creative Director</td>
                    </tr>
                    <tr>
                        <td>Radina Aleksandrova</td>
                        <td>Museum Experience Producer</td>
                    </tr>
                    <tr>
                        <td>Róisín Nolan</td>
                        <td>Production and Events Intern</td>
                    </tr>
                    <tr>
                        <td>Sam McCormick</td>
                        <td>Creative</td>
                    </tr>
                    <tr>
                        <td>Samuel Ruddick</td>
                        <td>Production Manager</td>
                    </tr>
                    <tr>
                        <td>Stephanie Busuito</td>
                        <td>Museum Experience Manager</td>
                    </tr>
                    <tr>
                        <td>Tea Ferrari</td>
                        <td>Graphic and Motion Designer</td>
                    </tr>
                    <tr>
                        <td>Thomas Somhorst </td>
                        <td>Sales Coordinator</td>
                    </tr>
                    <tr>
                        <td>Violeta Leon Perez</td>
                        <td>Junior Social Media & Email Marketeer</td>
                    </tr>
                </table>
            </main>

            <Footer />
        </>
    );
};

export default OurTeam;