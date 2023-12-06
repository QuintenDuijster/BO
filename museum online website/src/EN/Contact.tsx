import React, { useEffect } from 'react';
import Header from './Reusable/Header.tsx';
import Footer from './Reusable/Footer.tsx';

//CSS
import '../Reusable/PageStyle.css';
import './CSS/Contact.css';

const Contact: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum | Contact';
    }, []);

    //BUTOON


    return (
        <>
            <Header />

            <main className="Contact">
                <div className="Contact">
                    <h1>Contactinformation</h1>
                    <p>On this page you can find information about <button>partnerships</button>, <button>events</button> and <button>creative collaberation</button></p>
                </div>
                <div className="Partnerships">
                    <h2>Partner with us</h2>
                    <p className="Info">Nxt Museum is connecting art, science and technology by showcasing large scale immersive art installations in our ground
                        breaking space in North Amsterdam. It’s our focus on future technologies and our constant drive to seek, show, question and debate
                        what is next that provides fertile ground for opportunities to collaborate and – together – fuel new, exciting work.</p>
                    <p><img src="https://nxtmuseum.com/content/uploads/2021/04/03_Official_Partner_Samsung-1-e1623060631309-768x304.png"></img>
                        Nxt Museum en Samsung Electronics Benelux hebben de krachten gebundeld om technologie en kunst toegankelijk te maken voor iedereen
                        die zoekt naar what’s next in populaire cultuur. De gezamenlijke missie is het stimuleren van creativiteit door het gebruik van technologie.</p>
                    <p>Om de gezamenlijke inzet voor onderwijs voor iedereen kracht bij te zetten, lanceren Nxt Museum en Samsung naast een volledige,
                        technische upgrade in het museum (Samsung HD displays, Galaxy Smartphones, Samsung Flips and tablets),
                        een ambitieus onderwijsprogramma om de innovators van morgen te helpen.</p>
                    <p>Als de officiële partner van Nxt Lab – onze ruimte voor educatie, onderzoek en ontwikkeling – ondersteunt Samsung onze educatieve visie.
                        Samen ontdekken we de nieuwe grenzen van creativiteit via de wegen van educatie, met een focus op digitale skills.
                        We openen nieuwe mogelijkheden voor een jong publiek, om nieuwe ambities in de creatieve techindustrie werkelijkheid te maken.</p>
                    <p>Ben je ook geïnteresseerd in een samenwerking met een high-tech, innovatief museum met een creatieve en technisch onderlegde doelgroep?
                        Neem dan contact met ons op. Stuur een mail naar PARTNERSHIPS@NXTMUSEUM.COM.
                    </p>
                </div>
                <div className="Events">
                    <h2>Plan your event at Nxt Museum</h2>
                    <p>With a world class production team behind everything we do at Nxt, our museum, as well as our dedicated event spaces, are the perfect setting for events of all sizes
                        – from brand activations, product launches and awards dinners to company presentations and talks.</p>
                    <a href="https://forms.monday.com/forms/810777d6951ba6aa509c3ed2cca39cd4?r=use1"></a>
                    <h1>Our Event Spaces</h1>
                    <p className="DoLeft"> <h2>Nxt Stage</h2>
                        Nxt Stage is the perfect space for:
                        <ul>
                            <li>Engaging brand activations</li>
                            <li>Captivating talks & screenings</li>
                            <li>Company presentations</li>
                            <li>Impactful product launches</li>
                            <li>Live stream takeovers</li>
                            <li>Awards dinners and ceremonies in an immersive environment</li>
                        </ul>
                        <details>
                            <summary>Space features:</summary>
                        <ul>
                                <li>Access to 370 sqm. wall-to-floor projection surface</li>
                                <li>State-of-the-art audiovisual equipment</li>
                                <li>Consultation with our creatives</li>
                                <li>Recording equipment for livestreams</li>
                                <li>On-hand technicians to operate cameras and other equipment</li>
                                <li>Location manager</li>
                                <li>High-speed internet</li>
                                <li>Basic furniture for set design</li>
                            </ul>
                        </details>
                        Our largest and most iconic space includes a 370 sqm wall-to-floor projection surface, and can be hired for a range of large-scale or intimate events.
                        <br></br>
                        As a new media art museum, you can tap into our in-house production knowledge our widespread network of artists to ensure your event runs as
                        impactfully (and smoothly) as possible.
                    </p>
                    <h2> Nxt Lab </h2>
                    <p className="DoLeft"> <h2>Nxt Lab</h2>
                        Nxt Lab is the perfect space for:
                        <ul>
                            <li>Intimate company events</li>
                            <li>Inspiring leadership masterclasses</li>
                            <li>Creative workshops</li>
                            <li>Gamechanging strategy days</li>
                        </ul>
                        <details>
                            <summary>Space features:</summary>
                        <ul>
                                <li>State-of-the-art audiovisual equipment (current set-up), incl. screens and speakers</li>
                                <li>Consultation with our creatives</li>
                                <li>Catering potential</li>
                                <li>Recording equipment</li>
                                <li>On-hand technicians to operate cameras and other equipment</li>
                                <li>Location manager</li>
                                <li>High-speed internet</li>
                            </ul>
                        </details>
                        Nestled above our main museum area, Nxt Lab is a space for experimentation, research, development, failure and collaboration.
                        <br></br>
                        Here, we aim to facilitate learning and development for your team or group through a range hiring opportunities –
                        including educational workshops and space takeovers for team sessions, product launches and creative team-building days.
                    </p>

                </div>
                <div className="CreatieveCollab">
                    <h1>Creative collaborations</h1>
                    <p>We invite thinkers, makers, listeners, interdisciplinary creators and researchers to join us in our quest to seek, show and debate what’s next.</p>

                    <p>Unfortunately, we are currently not able to consider applications for new creative proposals and projects.
                        Please keep an eye on our socials (and this page) to stay in the loop on any programme-specific open calls.</p>
                </div>

            </main>

            <Footer />
        </>
    );
};

export default Contact;