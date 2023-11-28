import React, { useEffect } from 'react';
import Header from '../Reusable/Header.tsx';
import Footer from '../Reusable/Footer.tsx';

//CSS
import '../Reusable/PageStyle.css';
import './CSS/Contact.css';

const Contact: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum | Contact';
    }, []);

    return (
        <>
            <Header />

            <main>
                <article id="Vacatures">
                    <h2>Vacatures</h2>
                    <p>
                        Een team verbonden door een liefde voor kunst en vooruitgang.
                        We willen de toekomst en het heden ontdekken met nieuwe mediakunst.
                        Ga je mee op zoektocht?
                    </p>
                    <details>
                        <summary>Open vacatures!</summary>
                        <p>
                            Geen
                        </p>
                    </details>
                </article>

                <article id="PartnerWorden">
                    <h2>Partner worden</h2>
                    <p>
                        Nxt Museum verbindt kunst met technologie en wetenschap via grootschalige kunstinstallaties op 1400 m2 terrein in Amsterdam-Noord.
                        Onze focus ligt op nieuwe technologieën, gecombineerd met een constante impuls om op zoek te gaan naar de toekomst – vruchtbare grond voor vooruitstrevende samenwerkingen!
                    </p>
                    <p>
                        Nxt Museum en Samsung Electronics Benelux hebben de krachten gebundeld om technologie en kunst toegankelijk te maken voor iedereen die zoekt naar what’s next in populaire cultuur.
                        De gezamenlijke missie is het stimuleren van creativiteit door het gebruik van technologie.

                        Om de gezamenlijke inzet voor onderwijs voor iedereen kracht bij te zetten, lanceren Nxt Museum en Samsung naast een volledige, technische upgrade in het museum (Samsung HD displays,
                        Galaxy Smartphones, Samsung Flips and tablets), een ambitieus onderwijsprogramma om de innovators van morgen te helpen.

                        Als de officiële partner van Nxt Lab – onze ruimte voor educatie, onderzoek en ontwikkeling – ondersteunt Samsung onze educatieve visie.
                        Samen ontdekken we de nieuwe grenzen van creativiteit via de wegen van educatie, met een focus op digitale skills.
                        We openen nieuwe mogelijkheden voor een jong publiek, om nieuwe ambities in de creatieve techindustrie werkelijkheid te maken.

                        Deze zomer (2021) slaan Samsung en Nxt Museum de handen ineen om nieuwsgierigheid, creativiteit en kennis te ontketenen door middel van kunst en technologie.
                        We heten iedereen tussen 16 en 24 jaar welkom bij STUDIO 404: een gratis programma dat plaatsvindt in Nxt Lab en online.
                        In dit programma verkennen deelnemers de wereld van tech & kunst middels talks, workshops, overgeleverd door de experts van het vak.
                        We geven hiermee ruim 240 jongeren de handvatten voor een vruchtbare toekomst in een alsmaar sneller digitaliserende maatschappij.
                    </p>
                    <p>
                        Ben je ook geïnteresseerd in een samenwerking met een high-tech, innovatief museum met een creatieve en technisch onderlegde doelgroep?
                        Neem dan contact met ons op. Stuur een mail naar PARTNERSHIPS@NXTMUSEUM.COM
                    </p>
                </article>

                <article id="Pers">
                    <h2>Pers</h2>
                    <p>
                        Benieuwd naar Nxt en de mogelijkheden voor samenwerkingen? Neem contact op met PRESS@NXTMUSEUM.COM.

                        Klik op de onderstaande link om het persbericht te downloaden.
                    </p>

                    <a className="hoverLink">APRIL 2023_NXT MUSEUM LAUNCHES A NEW SEASONALLY ROTATING EXHIBITION, IN THEIR BIGGEST SPACE. REALTIME PRESENTS THREE ARTISTS USING BOUNDARY-BREAKING TECHNOLOGIES</a>

                    <a className="hoverLink">2023_REALTIME PERSFOTO’S DOWNLOADEN</a>

                    <a className="hoverLink">JUNI 2022_ ‘UFO – UNIDENTIFIED FLUID OTHER’ DE NIEUWE TENTOONSTELLING VAN NXT MUSEUM ONDERZOEKT WIE WE WORDEN IN DE VIRTUELE WERELD</a>

                    <a className="hoverLink">APRIL 2022_EERSTE AANKONDIGING: NXT MUSEUM LANCEERT EEN NIEUWE TENTOONSTELLING GENAAMD ‘UFO – UNIDENTIFIED FLUID OTHER’, OP 11 JUNI 2022</a>

                    <a className="hoverLink">‘UFO – UNIDENTIFIED FLUID OTHER’ PERSFOTO’S DOWNLOADEN</a>
                </article>
            </main>

            <Footer />
        </>
    );
};

export default Contact;