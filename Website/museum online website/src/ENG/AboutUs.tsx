import React, { useEffect } from 'react';
import Header from '../Reusable/Header.tsx';
import Footer from '../Reusable/Footer.tsx';

//CSS
import '../Reusable/PageStyle.css';
import './CSS/AboutUs.css';

const AboutUs: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum | AboutUs';
    }, []);

    return (
        <>
            <Header />

            <main>
                <article id="OnsTeam">
                    <h3>Ons Team</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Aveline Gevaerts</td>
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
                                <td>Elif Celem</td>
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
                                <td>Livia Nagy</td>
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
                                <td>Junior Museum & Office Manager</td>
                            </tr>
                            <tr>
                                <td>Miquel Tur</td>
                                <td>Workshops & Tours Coordinator</td>
                            </tr>
                            <tr>
                                <td>Morea van Bosse</td>
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
                                <td>Roisin Nolan</td>
                                <td>Exhibition & Event Production Intern</td>
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
                                <td>Thomas Somhorst</td>
                                <td>Sales Coordinator</td>
                            </tr>
                            <tr>
                                <td>Violeta Leon Perez</td>
                                <td>Junior Social Media & Email Marketeer</td>
                            </tr>
                        </tbody>
                    </table>
                </article>

                <article id="EtenenDrinken">
                    <h2>Eten en Drinken</h2>
                    <p>
                        Cafe Restaurant Metro is dagelijks geopend voor ontbijt en lunch en van woensdag t/m zondag voor dineren en drankjes.
                    </p>
                    <a href="https://caferestaurantmetro.nl" target="_blank">Maak een reservering</a>
                </article>

                <article id="OnzeHuisregels">
                    <h2>Huisregels en Algemene Voorwaarden Nxt Museum</h2>
                    <h3>Inleiding</h3>
                    <p>
                        Nxt Museum vindt het belangrijk de tevredenheid van haar bezoekers te garanderen.

                        Nxt Museum zal binnen de grenzen van de redelijkheid al het mogelijke doen om het bezoek aan de museumruimte en de door Nxt Museum georganiseerde tentoonstellingen en activiteiten overeenkomstig de wens van de bezoeker,
                        als betalende bezoeker of op uitnodiging, te laten verlopen.
                        Nxt Museum zal zich zoveel mogelijk inspannen eventuele overlast of ongemak voor de bezoeker tot een minimum te beperken,
                        alsmede de veiligheid van de bezoeker zoveel mogelijk te waarborgen.
                    </p>
                    <h2>Algemeen</h2>
                    <p>
                        Deze algemene Bezoekvoorwaarden zijn van toepassing op iedere overeenkomst tussen Nxt Museum en een bezoeker.
                        Afwijkingen van deze voorwaarden zijn slechts geldig indien deze uitdrukkelijk en schriftelijk zijn overeengekomen.
                    </p>
                    <h2>1.Definities en algemene bepalingen</h2>
                    <details>
                        <summary>Artikel 1.1</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 1.2</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 1.3</summary>
                        <p>

                        </p>
                    </details>

                    <h2>2.Tickets</h2>
                    <details>
                        <summary>Artikel 2.1</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 2.2</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 2.3</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 2.4</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 2.5</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 2.6</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 2.7</summary>
                        <p>

                        </p>
                    </details>

                    <h2>3.Verblijf in de museumruimte</h2>
                    <details>
                        <summary>Artikel 3.1</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 3.2</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 3.3</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 3.4</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 3.5</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 3.6</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 3.7</summary>
                        <p>

                        </p>
                    </details>

                    <h2>4.Klachten</h2>
                    <details>
                        <summary>Artikel 4</summary>
                        <p>

                        </p>
                    </details>

                    <h2>5.Aansprakelijkheid van het museum</h2>
                    <details>
                        <summary>Artikel 5.1</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 5.2</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 5.3</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 5.4</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 5.5</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 5.6</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 5.7</summary>
                        <p>

                        </p>
                    </details>

                    <h2>6.Aansprakelijkheid van bezoekers</h2>
                    <details>
                        <summary>Artikel 6.1</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 6.2</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 6.3</summary>
                        <p>

                        </p>
                    </details>

                    <h2>7.Privacy</h2>
                    <details>
                        <summary>Artikel 7.1</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 7.2</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 7.3</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 7.4</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 7.5</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 7.6</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 7.7</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 8.1</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 8.2</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 8.3</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 8.4</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 8.5</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 8.6</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 8.7</summary>
                        <p>

                        </p>
                    </details>

                    <h2>Artikel 9 Openingstijden</h2>
                    <details>
                        <summary>Artikel 9.1</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 9.2</summary>
                        <p>

                        </p>
                    </details>

                    <h2>Artikel 10 Enquete - prijstrekking</h2>
                    <details>
                        <summary>Artikel 10.1</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 10.2</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 10.3</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 10.4</summary>
                        <p>

                        </p>
                    </details>

                    <h2>Artikel 11 Toepasselijk recht en bevoegde rechter</h2>
                    <details>
                        <summary>Artikel 11.1</summary>
                        <p>

                        </p>
                    </details>
                    <details>
                        <summary>Artikel 11.2</summary>
                        <p>

                        </p>
                    </details>
                </article>
            </main>

            <Footer />
        </>
    );
};

export default AboutUs;