import React, { useEffect } from 'react';
import Header from './Herbruikbaar/Header.tsx';
import Footer from './Herbruikbaar/Footer.tsx';

//CSS
import '../Reusable/PageStyle.css';
import './CSS/BezoekersInformatie.css';

const BezoekersInformatie: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum | BezoekersInformatie';
    }, []);

    return (
        <>
            <Header />

            <main>
                <article>
                    <h2>To eat & drink</h2>
                    <p>Café Restaurant Metro is dagelijks geopend voor ontbijt en lunch en van woensdag t/m zondag voor dineren en drankjes.</p>
                    <a href="https://caferestaurantmetro.nl/" target="_blank">Maak een reservering</a>
                </article>
                <article>
                    <h2>Openingstijden</h2>
                    <ul>
                        <li>Maandag: gesloten</li>
                        <li>Dinsdag: 10:30 - 20:30</li>
                        <li>Woensdag: 11:00 - 21:30</li>
                        <li>Donderdag: 10:30 - 22:30</li>
                        <li>Vrijdag: gesloten</li>
                        <li>Zaterdag: 10:30 - 20:30</li>
                        <li>Zondag: 10:30 - 22:30</li>
                    </ul>
                </article>
                <article>
                    <h2>Speciale openingstijden</h2>
                    <ul>
                        <li>24 december: 10:30 - 17:30</li>
                        <li>25 december: gesloten</li>
                        <li>26 december: 12:00 - 21:00 c</li>
                        <li>31 january: 10:30 - 17:00 </li>
                        <li>1 january: 12:00 - 21:00 </li>
                    </ul>
                </article>
                <article>
                    <image></image>
                    <h2>Routebeschrijving</h2>
                    <details>
                        <summary>Vanaf De Pijp</summary>
                        <p>Stap in metro 52 richting Noord vanaf station De Pijp (Noord-Zuidlijn) en stap uit bij halte Noorderpark. Vanaf hier rest een wandeling van 10 minuten naar Asterweg 22, dwars door het bruisende hart van Noord.</p>
                    </details>
                    <details>
                        <summary>Vanaf Museumplein</summary>
                        <p>Loop 10 minuten naar metrostation Vijzelgracht en neem de metro 52 richting Noord. Stap uit bij de halte Noorderpark. Vanaf hier bereik je Nxt Museum op Asterweg 22 via het bruisende hart van Noord met een wandeling van 10 minuten.</p>
                    </details>
                    <details>
                        <summary>Vanaf Amsterdam Centraal</summary>
                        <p>Via Amsterdam Centraal Station bereik je Nxt Museum met 10 minuten fietsen of 20 minuten lopen. Neem de pont naar Buiksloterweg, gelegen aan de Ij-zijde van Amsterdam Centraal. Na de oversteek bereik je ons met een korte wandeling of fietstocht naar Asterweg 22.</p>
                    </details>
                </article>
                <article>
                    <h2>GroepsBezoek</h2>
                    <p>
                        Boek hier je tickets voor Groepsbezoek.
                        Zorg ervoor dat je 2 weken voor je bezoek je tickets reserveert.

                        Nadat je de datum en tijd voor je bezoek aan Nxt hebt geselecteerd, kun je online betalen of via een factuur, in stap 8.
                    </p>
                    <a>Groepsboekingen</a>
                </article>
                <article>
                    <h2>Privé museumervaring</h2>
                    <h3>Your chance to take over the museum!</h3>
                    <p>
                        Jouw kans om het museum over te nemen!

                        Boek een privétijdslot en geniet vanaf 27 september van onze premium museumervaring. Verzamel je eigen persoonlijke VIP's voor een transformerend cultureel uitje en heb onze gloednieuwe tentoonstelling helemaal voor jezelf.
                    </p>

                    <h3>Alles wat u moet weten:</h3>
                    <p>
                        - Het hele museum voor jezelf, of je groep (max 25 VIP's) voor een uur
                        - Een persoonlijke rondleiding door het museum met een toegewijde gids
                    </p>

                    <h3>Van donderdag tot zaterdag:</h3>
                    <p>
                        Ochtendbezoek: 10:00 – 11:00 uur
                        Avondbezoek: 22.30 – 23.30 uur
                    </p>
                    <a>Boek uw kaartje</a>
                </article>
                <article>
                    <h2>Begeleide tour</h2>
                    <h3>Ontdek nieuwe perspectieven</h3>
                    <p>
                        Verken de diepere dimensies van de tentoonstelling met onze rondleiding door UFO - Unidentified Fluid Other. Ga mee met onze deskundige gids om een kijkje achter de schermen te krijgen in de processen van de kunstenaars en duik dieper in de betekenis van kunst en technologie in onze tentoonstelling.
                    </p>

                    <h3>Goed om te weten</h3>
                    <p>
                        - Prijs: 5€ per persoon
                        (+ toegangsticket)
                        - Duur: 60 minuten
                        - Taal: Engels & Nederlands
                        - Beschikbaar op maandag en woensdag: 11:00h en 14:00h
                    </p>

                    <h3>Boek een rondleiding</h3>
                    <p>
                        Boek een rondleiding en duik volledig in de betekenis van de kunst en technologie in de tentoonstelling en in onze ontwikkelende wereld.
                    </p>
                    <a>Boek jouw rondleiding</a>
                </article>
                <a>Bezoekvoorwaarden</a>
            </main>

            <Footer />
        </>
    );
};

export default BezoekersInformatie;