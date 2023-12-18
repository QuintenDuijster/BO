import React, { useEffect } from 'react';
import Header from './Herbruikbaar/Header.tsx';
import Footer from './Herbruikbaar/Footer.tsx';

//CSS
import '../Reusable/PageStyle.css';
import './CSS/Contact.css';

const Contact: React.FC = () => {
    useEffect(() => {
        document.title = 'Nxt Museum | Contact';
    }, []);

    //BUTOON


    return (
        <>
            <Header />

            <main className="Contact">
                <div>
                    <h1>Contactinformatie</h1>
                    <p>Op deze pagina vindt u informatie over <button>partnerships</button>, <button>events</button> en <button>creative collaberation</button></p>
                </div>
                <div className="Partnerships">
                    <h2>Partner worden?</h2>
                    <p className="Info">Nxt Museum verbindt kunst met technologie en wetenschap via grootschalige kunstinstallaties op 1400 m2 terrein in Amsterdam-Noord.
                        Onze focus ligt op nieuwe technologieën, gecombineerd met een constante impuls om op zoek te gaan naar de toekomst
                        – vruchtbare grond voor vooruitstrevende samenwerkingen!
                    </p>
                    <p><img src="https://nxtmuseum.com/content/uploads/2021/04/03_Official_Partner_Samsung-1-e1623060631309-768x304.png"></img>
                        Nxt Museum en Samsung Electronics Benelux hebben de krachten gebundeld om technologie en kunst toegankelijk te maken voor iedereen
                        die zoekt naar what’s next in populaire cultuur. De gezamenlijke missie is het stimuleren van creativiteit door het gebruik van technologie.
                    </p>
                    <p>Om de gezamenlijke inzet voor onderwijs voor iedereen kracht bij te zetten, lanceren Nxt Museum en Samsung naast een volledige,
                        technische upgrade in het museum (Samsung HD displays, Galaxy Smartphones, Samsung Flips and tablets),
                        een ambitieus onderwijsprogramma om de innovators van morgen te helpen.
                    </p>
                    <p>Als de officiële partner van Nxt Lab – onze ruimte voor educatie, onderzoek en ontwikkeling – ondersteunt Samsung onze educatieve visie.
                        Samen ontdekken we de nieuwe grenzen van creativiteit via de wegen van educatie, met een focus op digitale skills.
                        We openen nieuwe mogelijkheden voor een jong publiek, om nieuwe ambities in de creatieve techindustrie werkelijkheid te maken.
                    </p>
                    <p>Ben je ook geïnteresseerd in een samenwerking met een high-tech, innovatief museum met een creatieve en technisch onderlegde doelgroep?
                        Neem dan contact met ons op. Stuur een mail naar PARTNERSHIPS@NXTMUSEUM.COM.
                    </p>
                </div>
                <div className="Events">
                    <h2>Onze ruimte huren</h2>
                    <p>Ons museum en onze evenementenruimtes zijn de perfecte setting voor evenementen van alle groottes – van merkactivaties,
                        productlanceringen tot bedrijfspresentaties en gesprekken.
                    </p>
                    <a href="https://forms.monday.com/forms/a28d10009c9ca535a7dcf5a86d7ce4e2?r=use1"></a>
                    <h1>Onze Evenementenruimtes</h1>
                    <h2>Nxt Stage</h2>
                    <p className="DoLeft">
                        Nxt Stage is een impactvolle ruimte voor:
                        Je kunt ook gebruikmaken van onze gespecialiseerde technici, interne catering en aanvullende apparatuur zoals camera’s, microfoons, laptops en verlichting.
                    </p>
                    <ul>
                        <li>Merkactivaties</li>
                        <li>Live Talks</li>
                        <li>Bedrijfspresentaties</li>
                        <li>Productlanceringen</li>
                        <li>Overnames van live streams</li>
                        <li>Awards diners en ceremonies</li>
                    </ul>
                    <details>
                        <summary>Kenmerken van de ruimte:</summary>
                        <ul>
                            <li>Toegang tot een projectieoppervlak van 370 m² van muur tot vloer</li>
                            <li>Moderne audiovisuele apparatuur</li>
                            <li>Overleg met onze creatieven</li>
                            <li>Opnameapparatuur voor livestreams</li>
                            <li>Technici ter plaatse voor het bedienen van camera’s en andere apparatuur</li>
                            <li>Locatiemanager</li>
                            <li>Supersnel internet</li>
                            <li>Basis Meubilair voor set ontwerp</li>
                        </ul>
                    </details>
                    <h2> Nxt Lab </h2>
                    <p className="DoRight">
                        Nxt Lab is de ideale ruimte voor:
                    </p>
                    <ul>
                        <li>Intieme bedrijfsevenementen</li>
                        <li>Inspirerende leiderschaps-masterclasses</li>
                        <li>Creatieve workshops</li>
                        <li>Baanbrekende strategiedagen</li>
                    </ul>
                    <p>   Hier streven we ernaar om leren en ontwikkeling te faciliteren voor je team of groep via diverse verhuurmogelijkheden
                        – waaronder educatieve workshops en het overnemen van de ruimte voor teambijeenkomsten, productlanceringen en creatieve teambuildingsdagen.
                    </p>
                    <details>
                        <summary>Kenmerken van de ruimte:</summary>
                        <ul>
                            <li>Moderne audiovisuele apparatuur (huidige opstelling), inclusief schermen en luidsprekers</li>
                            <li>Overleg met onze creatievelingen</li>
                            <li>Mogelijkheid tot catering</li>
                            <li>Opnameapparatuur</li>
                            <li>Technici ter plaatse voor het bedienen van camera’s en andere apparatuur</li>
                            <li>Locatiemanager</li>
                            <li>Supersnel internet</li>
                            <li>Nxt Lab is een ruimte voor experiment, onderzoek, ontwikkeling en samenwerking</li>
                        </ul>
                    </details>
                </div>
                <div className="CreatieveCollab">
                    <h1>Creatieve samenwerkingen</h1>
                    <p>Wij nodigen denkers, makers, onderzoekers en interdisciplinaire creatievelingen uit om samen met ons op zoek te gaan en te discussiëren over de vraag:
                        what’s next?
                    </p>

                    <p>Op dit moment kunnen we helaas geen nieuwe aanvragen voor creatieve voorstellen en projecten in behandeling nemen.
                        Hou onze socials (en deze pagina) in de gaten om op de hoogte te blijven van toekomstige open calls.
                    </p>
                </div>

            </main>

            <Footer />
        </>
    );
};

export default Contact;