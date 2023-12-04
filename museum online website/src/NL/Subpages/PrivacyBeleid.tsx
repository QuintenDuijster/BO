import React, { useEffect } from 'react';
import Header from '../Herbruikbaar/Header.tsx';
import Footer from '../Herbruikbaar/Footer.tsx';

//CSS
import '../Reusable/PageStyle.css';
import './CSS/Faq.css';


const PrivacyBeleid: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum | PrivacyBeleid';
    }, []);

    return (
        <>
            <Header />

            <main>
                <article>
                    <h1>Privacyverklaring</h1>
                    <p>
                        Deze privacyverklaring beschrijft hoe Nxt Museum (hierna “Nxt Museum” en “wij”) persoonsgegevens gebruikt en persoonlijke informatie die jij met ons deelt beschermt. Deze privacyverklaring is opgesteld Algemene Verordening Gegevensbescherming (“AVG”) van de Europese Unie. Nxt Museum neemt de bescherming van jouw privacy serieus. Daarom wil Nxt Museum door middel van deze privacyverklaring zo transparant mogelijk zijn over haar omgang met persoonsgegevens en wij streven ernaar deze transparantie te bereiken door deze privacyverklaring.
                    </p>

                    <p>
                        Deze privacyverklaring zet dan ook uiteen van wie de persoonsgegevens zijn, welke dat zijn en met welk doel wij ze bewaren en verzamelen. Verder kun je ook lezen op basis van welke juridische grondslagen wij persoonsgegevens verzamelen, met wie we deze gegevens delen en hoe we ze beveiligen. Tot slot wordt uiteengezet wat jouw rechten zijn ten aanzien van de door ons verzamelde en bewaarde persoonsgegevens.
                    </p>

                    <p>
                        Mochten wij u vragen om bepaalde informatie waarmee u kunt worden geïdentificeerd bij het gebruik van deze website, dan kunt u er zeker van zijn dat deze alleen zal worden gebruikt in overeenstemming met deze privacyverklaring.
                    </p>

                    <p>
                        Deze privacyverklaring is op 7 juli 2020 in werking getreden (en voor het laatst gewijzigd op 18 mei 2021). De meest recente versie van de privacyverklaring staat altijd op de website van Nxt Museum. Wij raden jou dan ook aan regelmatig onze websites te controleren op nieuwe versies en de privacyverklaring te lezen.
                    </p>

                    <p>
                        Het privacybeleid van Nxt Museum is niet van toepassing op andere websites. Nxt Museum adviseert de privacyverklaring van deze websites, ook bij gelieerde partijen, altijd te raadplegen voor meer gedetailleerde informatie.
                    </p>

                    <h2>Maatregelen coronavirus (Covid-19)</h2>

                    <p>
                        Om te voldoen aan de landelijke coronavirus-richtlijnen en om de aanbevelingen van het Rijksinstituut voor Volksgezondheid en Milieu (RIVM) op te volgen, verzamelt Nxt Museum ook persoonsgegevens voor contactonderzoek met betrekking tot coronavirus-maatregelen.
                    </p>

                    <p>
                        Als je een kaartje koopt, zal Nxt Museum je vragen om vragen gerelateerde aan jouw gezondheid (gevoelige persoonsgegevens) te beantwoorden en je naam en e-mailadres op te geven. De GGD Amsterdam (GGD) kan Nxt Museum verzoeken persoonsgegevens te verstrekken om hen te helpen het coronavirus op te sporen. In het belang van de – internationale – volksgezondheid zal Nxt Museum aan een dergelijk verzoek voldoen. Nxt Museum bewaart uw corona-gerelateerde informatie gedurende een periode van drie (3) maanden na jouw bezoek.
                    </p>

                    <h2>Algemeen</h2>

                    <p>
                        Nxt Museum beperkt de verwerking van persoonsgegevens tot een absoluut minimum. Wij zullen echter altijd bepaalde persoonsgegevens nodig hebben, bijvoorbeeld voor de levering van alle producten en diensten die het museum aanbiedt. Zo vragen de webwinkel en online ticketshop bepaalde persoonsgegevens op: deze gegevens zijn nodig om de bestelde producten of diensten correct te kunnen leveren. Persoonsgegevens en overige gegevens worden ook gebruikt om de services van Nxt Museum te kunnen verbeteren en om statistisch onderzoek, marktonderzoek en klanttevredenheidsonderzoek uit te kunnen voeren. Nxt Museum voert bijvoorbeeld met enige regelmaat een klanttevredenheidsonderzoek uit door een enquête te sturen. Nxt Museum gebruikt daarvoor de diensten van derden.
                    </p>

                    <p>
                        Er zijn ook andere gevallen waarin wij uw persoonsgegevens nodig hebben, bijvoorbeeld wanneer jij je abonneert op onze e-mailcommunicatie, een evenement of activiteit in het museum bijwoont of solliciteert naar een baan bij het museum. Daarnaast verzamelen wij persoonsgegevens, zoals je IP-adres en de browser die je gebruikt, als je gebruik maakt van onze websites en/of social media kanalen. Deze gegevens worden alleen gebruikt om te analyseren hoe onze website werkt en kunnen eventueel ook voor marketingdoeleinden worden gebruikt (Google Analytics). Jouw gegevens, in de vorm van videobeelden van jou, worden ook verwerkt als er tijdens uw bezoek aan het museum een ​​opname van u wordt gemaakt door beveiligingscamera’s.
                    </p>

                    <p>
                        Er wordt met de grootst mogelijke zorgvuldigheid omgegaan met jouw persoonsgegevens. In principe Nxt Museum deelt jouw gegevens niet met derden en verstrekt deze uitsluitend als dit nodig is voor de uitvoering van de betreffende dienst, of om te voldoen aan een wettelijke verplichting. We doen onze uiterste best om ervoor te zorgen dat deze gegevens zo goed mogelijk worden beveiligd.
                    </p>

                    <p>
                        Persoonsgegevens worden zo kort mogelijk bewaard, rekening houdend met wettelijke bewaartermijnen.
                    </p>

                    <p>
                        Wie haar/zijn/hun gegevens aan ons verstrekt/vertrekken, is/zijn en blijft/blijven de eigenaar van deze gegevens. Dit betekent dat de eigenaar van deze gegevens toestemming heeft gegeven om de persoonsgegevens te verwerken. Het betekent ook dat de eigenaar deze toestemming kan intrekken en verzoeken om verwijdering van haar/zijn/hun gegevens.
                    </p>
                </article>
            </main>

            <Footer />
        </>
    );
};

export default PrivacyBeleid;