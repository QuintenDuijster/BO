import React from 'react';
import Header from './Reusable/Header.tsx';
import Footer from './Reusable/Footer.tsx';

const FAQ: React.FC = () => {
    return (
        <div className="Faq">

            <Header />
            <main>
                <div className="Faq">
                    <h1>Veelgestelde Vragen</h1>
                    <p>Hier vindt u onze meest gestelde vragen</p>

                    <div className="Tickets">
                    <details>
                        <summary className="Highsummary" >Tickets</summary>
                        <p className="InfoTickets">Hier vindt u de meest gestelde vragen over onze tickets</p>
                        <div className="Info">
                            <details>
                                <summary className="Lowsummary" >Kan ik een ticket aan de deur kopen?</summary>
                                <p className="HiddenText">
                                    Nee, tickets voor Nxt Museum zijn uitsluitend online te koop via onze ticketshop.
                                    Online boekingen stellen ons in staat om het aantal mensen in de ruimte bij te houden om de beste ervaring voor elke bezoeker te garanderen.
                                    Wij bieden IDeal, Visa, Mastercard, Sofort Payment, Bancontact, Vpay, Alipay aan als betaalopties in onze ticketshop.
                                </p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Hoe kan ik mijn tijdslot wijzigen?</summary>
                                <p className="HiddenText">
                                    Indien je echt niet kunt komen, kun je jouw ticket tot 4 uur voor je tijdslot wijzigen. Bezoek onze ticketsupport om jouw reservering te wijzigen.
                                </p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Kan ik mijn ticket retourneren?</summary>
                                <p className="HiddenText">
                                    Op entreetickets is geen herroepingsrecht van toepassing. Indien je echt niet kunt komen, kun je jouw ticket tot 4 uur voor je tijdslot wijzigen.
                                    Bezoek onze ticketsupport om jouw reservering te wijzigen.
                                </p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Kan ik een factuur krijgen voor mijn ticket(s)?</summary>
                                <p className="HiddenText">
                                    Nee, helaas staat ons ticketsysteem het niet toe om een factuur te maken voor dit type ticket.
                                    Een boekingsoverzicht wordt via een bevestigingsmail naar je opgestuurd, samen met je tickets.
                                </p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Ik heb teveel tickets besteld, kan ik een terugbetaling aanvragen?</summary>
                                <p className="HiddenText">
                                    Op entreetickets is geen herroepingsrecht van toepassing. Wel is er de mogelijkheid om de tickets om te boeken naar een andere dag en/of tijd via onze ticketsupport.
                                </p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Ik ben een (internationale) student, kan ik een studentenkaart kopen?</summary>
                                <p className="HiddenText">
                                    Ja, alle studenten zijn welkom bij Nxt Museum! Zorg ervoor dat je een geldige studentenkaart meeneemt (met foto en geldige einddatum).
                                </p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Ik ben student maar heb geen studentenkaart, kan ik toch een studententicket kopen?</summary>
                                <p className="HiddenText">
                                    Ja dat kan! Lokale en internationale studenten moeten bij binnenkomst in het museum een geldig bewijs van inschrijving (bijvoorbeeld Studielink) meenemen.
                                </p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Is het mogelijk om Nxt Museum te bezoeken met een ICOM/ Museumjaarkaart?</summary>
                                <p className="HiddenText">
                                    De ICOM/ Museumjaarkaart zijn niet geldig bij Nxt Museum. Wij ontvangen geen subsidie en genereren al onze inkomsten via de verkoop van tickets en onze museumwinkel.
                                </p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Waar kan ik mijn Stadspas ticket kopen?</summary>
                                <p className="HiddenText">
                                    Per Stadspas kun je één kaartje reserveren. Het is niet mogelijk om een gast gratis mee te nemen.
                                    Kom je samen met iemand die een regulier kaartje heeft, boek dan eerst je stadspas kaartje om er zeker van te zijn dat je samen het museum in kunt.
                                    Zorg ervoor dat je je geldige Stadspas meeneemt om aan de deur te laten zien. Indien de kaart niet geldig is op het moment van bezoek, moet de volledige ticketprijs bij de ingang worden betaald.
                                </p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Hoe kan ik Nxt Museum bezoeken met een IAmsterdam City Card?</summary>
                                <p className="HiddenText">
                                    Boek je tickets tijdig via onze website. Neem je geldige City Card mee naar het museum. Wanneer de City Card niet geldig is, zal het volledige bedrag bij de ingang betaald moeten worden.
                                </p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Kan ik op de reservelijst worden gezet als tickets uitverkocht zijn?</summary>
                                <p className="HiddenText">
                                    Dit is helaas niet mogelijk.
                                </p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Hoe profiteer ik van dynamische ticketprijzen?</summary>
                                <p className="HiddenText">
                                    De prijzen van tickets voor volwassenen variëren op basis van het tijdslot en zijn van € 20,50 tot € 24,75. We bieden een speciaal tarief voor vroege en late tijdsloten tijdens weekdagen.
                                </p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Kan ik Nxt Museum (opnieuw) bezoeken met mijn Museumnacht ticket?</summary>
                                <p className="HiddenText">
                                    Na de Museumnacht zelf (5 november) kun je Nxt Museum niet bezoeken met het vertoon van je Museumnacht ticket. Dit aanbod geldt alleen voor musea die de Museumkaart accepteren.
                                </p>
                                </details>
                            </div>  
                        </details>
                    </div>
                    <div className="GroupBooking">
                    <details>
                        <summary className="Highsummary">Groep- en schoolbezoek</summary>
                        <p className="InfoGroupBooking">Hier vindt u de meest gestelde vragen over onze bezoeken in groepsverband</p>
                        <div className="Info">
                            <details>
                                <summary className="Lowsummary" >Hoe kan ik een schoolbezoek organiseren?</summary>
                                <p className="HiddenText">Via onze schoolboekingstool boek je heel eenvoudig een bezoek voor je leerlingen. Zorg ervoor dat je jouw tickets 2 weken voor jouw bezoek reserveert. Wij accepteren ook de Cultuurkaart!
                                    We nemen zo snel mogelijk contact met je op. Dit duurt ongeveer 4 tot 5 dagen.</p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Hoe regel ik een groepsbezoek aan Nxt Museum?</summary>
                                <p className="HiddenText">Voor groepen van meer dan 10 personen – of het nu een bedrijfsuitje is of gewoon een groep vrienden – kan je deze Groepsboekingen tool gebruiken.
                                    Groepsboekingen moeten minimaal 2 weken voor je bezoek worden gereserveerd. We nemen zo snel mogelijk contact met je op. We streven ernaar om binnen 4-5 dagen te antwoorden.</p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Welke workshops bieden jullie aan voor scholen?</summary>
                                <p className="HiddenText">In 2022 hebben we twee workshops in de aanbieding voor groepen – Slow Looking, en Facefilter creatie. Vind hier meer informatie</p>
                                </details>
                            </div>
                        </details>
                    </div>
                    <div className="Accessibility">
                    <details>
                        <summary className="Highsummary">Toegankelijkheid</summary>
                        <p className="InfoAccessibility">Onze meest gestelde vragen over onze toegankelijkheidsopties</p>
                        <div className="Info">
                            <details>
                                <summary className="Lowsummary" >Kan ik Nxt Museum bezoeken als ik epilepsie heb?</summary>
                                <p className="HiddenText">Onze tentoonstelling bevat flitsende videobeelden en harde geluiden, wat ongeschikt kan zijn voor personen met epilepsie</p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Is het museum rolstoeltoegankelijk?</summary>
                                <p className="HiddenText">Ja, de tentoonstelling en het restaurant zijn toegankelijk via een rolstoelhelling en alternative routes.
                                    We beschikken ook over mindervalide-parkeerplekken die gereserveerd kunnen worden via ons contact formulier.</p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Bieden jullie begeleiders tickets aan?</summary>
                                <p className="HiddenText">Bezoekers die niet zelfstandig door het museum kunnen bewegen, mogen gratis een begeleider meenemen.
                                    Dit is geldig voor bezoekers met loophulpmiddelen, gezicht- en gehoorbeperkingen. Neem contact op via ons contactformulier</p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Parkeerplaatsen voor mindervaliden</summary>
                                <p className="HiddenText">Er zijn parkeerplaatsen voor mindervalide beschikbaar. Je kan deze reserveren door hier een bericht achter te laten.</p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Is het museum geschikt voor kinderen?</summary>
                                <p className="HiddenText">Nxt Museum is geliefd door jong en oud! Veel van onze kunstwerken en installaties bevinden zich in donkere kamers met harde geluiden,
                                    sterke taal, naaktheid en flitsende video’s. Houd hier rekening mee als je overweegt om jonge kinderen meenemen.</p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Vanaf welke leeftijd hebben kinderen zonder begeleiding toegang tot het museum?</summary>
                                <p className="HiddenText">Kinderen vanaf 12 jaar hebben zonder begeleiding van een volwassene toegang tot het museum, maar mogen geen jongere kinderen begeleiden.
                                    Ouders en voogden van kinderen van 12 – 18 jaar zijn verantwoordelijk voor en aanspreekbaar op het gedrag van hun kinderen.</p>
                                </details>
                            </div>
                        </details>
                    </div>
                    <div className="Museum">
                    <details>
                        <summary className="Highsummary">In het museum</summary>
                        <p className="InfoMuseum">Alle meest gestelde vragen over het museum zelf</p>
                        <div className="Info">
                            <details>
                                <summary className="Lowsummary" >Hoe lang kan ik in het museum blijven?</summary>
                                <p className="HiddenText">De meeste bezoekers brengen ongeveer 1 tot 1 1/2 uur door in de tentoonstelling.
                                    We raden je aan zoveel tijd te nemen als je wilt – blijf zo lang als je wilt, tot we sluiten!</p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Mag ik foto’s maken tijdens mijn bezoek?</summary>
                                <p className="HiddenText">Leg je bezoek gerust vast met je telefoon.
                                    Professionele fototoestellen (camera’s met verwisselbare lenzen) en accessoires (statieven, flitser, enz.) zijn niet toegestaan in de expositie.</p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Kan ik bij jullie gebruik maken van een kluisje?</summary>
                                <p className="HiddenText">Jassen en kleine tassen zijn toegestaan in het museum, maar we vragen je om grote tassen en rugzakken op te bergen als je deze meeneemt.
                                    We hebben geen ruimte om grote koffers of andere bagage op te bergen.</p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Kan ik bij Nxt Museum gebruik maken van het wifi-netwerk?</summary>
                                <p className="HiddenText">Nxt Museum biedt gratis wifi aan onze gasten; we adviseren om dit netwerk niet te gebruiken voor het verstrekken van creditcardinformatie,
                                    wachtwoorden en andere persoonlijke informatie.</p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Is eten en drinken toegestaan binnen de tentoonstelling?</summary>
                                <p className="HiddenText">Binnen de tentoonstelling is eten en drinken niet toegestaan. De installaties bestaan uit technologische apparatuur die zeer gevoelig is.</p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Kan ik mijn hond meenemen naar Nxt Museum?</summary>
                                <p className="HiddenText">Nee, we laten geen honden toe in het museum, tenzij het geleidehonden zijn.
                                    We denken niet dat trouwe viervoeters de geluidsniveaus en flitsende lichten zo waarderen als jij.</p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Wat is een POAP en hoe kan ik deze verzamelen in de tentoonstelling?</summary>
                                <p className="HiddenText">POAP’s zijn verzamelbare digitale tokens die op de blockchain worden opgeslagen. Gemint als een NFT, bieden de 3 POAP’s unieke voordelen, in de toekomst!
                                    Deze verzamelobjecten zijn verborgen in het museum en zijn leuk voor een zoektocht. Je haalt ze eenvoudig op via je e-mailadres of bewaart ze in je digitale portemonnee.</p>
                                </details>
                            </div>
                        </details>
                    </div>
                    <div className="Location">
                    <details>
                        <summary className="Highsummary">Locatie</summary>
                        <p className="LocationInfo">Routeomschrijving vanaf verschillende locaties</p>
                        <div className="Info">
                            <details>
                                <summary className="Lowsummary" >Vanaf De Pijp</summary>
                                <p className="HiddenText">Stap in metro 52 richting Noord vanaf station De Pijp (Noord-Zuidlijn) en stap uit bij halte Noorderpark.
                                    Vanaf hier rest een wandeling van 10 minuten naar Asterweg 22, dwars door het bruisende hart van Noord.</p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Vanaf Museumplein</summary>
                                <p className="HiddenText">Loop 10 minuten naar metrostation Vijzelgracht en neem de metro 52 richting Noord. Stap uit bij de halte Noorderpark.
                                    Vanaf hier bereik je Nxt Museum op Asterweg 22 via het bruisende hart van Noord met een wandeling van 10 minuten.</p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Vanaf Amsterdam Centraal</summary>
                                <p className="HiddenText">Via Amsterdam Centraal Station bereik je Nxt Museum met 10 minuten fietsen of 20 minuten lopen. Neem de pont naar Buiksloterweg,
                                    gelegen aan de Ij-zijde van Amsterdam Centraal. Na de oversteek bereik je ons met een korte wandeling of fietstocht naar Asterweg 22.</p>
                                </details>
                            </div>
                        </details>
                    </div>
                    <div className="Gifts">
                    <details>
                        <summary className="Highsummary">Nxt Merchandise & Cadeautickets</summary>
                        <p className="GiftsInfo">Informatie over eventuele merchandise en/of cadeautickets</p>
                        <div className="Info">
                            <details>
                                <summary className="Lowsummary" >Is het mogelijk om voor meerdere tickets een cadeaubon aan te schaffen?</summary>
                                <p className="HiddenText">Ja dat kan! Schenk een voucher voor een bezoek aan Nxt Museum voor meerdere personen door meerdere tickets toe te voegen aan je winkelmandje in stap 1,
                                    in onze ticketshop. Houd er rekening mee dat de toegangskaarten worden gebundeld in één voucher die in één keer moet worden ingewisseld.
                                    Als je cadeaubonnen voor meerdere personen wilt kopen, koop dan de cadeaubonnen in aparte bestellingen.</p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Hoe lang is mijn cadeauticket geldig?</summary>
                                <p className="HiddenText">Het cadeauticket is geldig tot 1 jaar na aankoop.</p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Kan ik een factuur ontvangen bij de aanschaf van een cadeauticket?</summary>
                                <p className="HiddenText">Nee, helaas is het in ons ticketing systeem geen optie om hiervoor een factuur te versturen. We werken hard aan een oplossing!</p>
                                </details>
                            </div>
                        </details>
                    </div>
                    <div className="Partnerships">
                    <details>
                        <summary className="Highsummary">Partnerships & Pers</summary>
                        <p className="PartnershipsInfo">Bent u van de pers of wilt u een partnership met ons aangaan dan kunt u hier de informatie vinden.</p>
                        <div className="Info">
                            <details>
                                <summary className="Lowsummary" >Ik werk voor een persorganisatie. Wie kan ik over samenwerkingen contacten?</summary>
                                <p className="HiddenText">Neem contact op via ons contact formulier.</p>
                                </details>
                            <details>
                                <summary className="Lowsummary" >Ik ben een kunstenaar / maker. Hoe kan ik het beste mijn project of voorstel indienen bij Nxt Museum?</summary>
                                <p className="HiddenText">Op dit moment kunnen we helaas geen aanvragen voor nieuwe creatieve voorstellen en projecten in behandeling nemen.
                                    Houd onze socials (en deze pagina) in de gaten om op de hoogte te blijven van programma-specifieke open calls.</p>
                                </details>
                            </div>
                        </details>
                    </div>
                </div>
            </main>

            <Footer />

        </div>
    );
};

export default FAQ;

//<details>
//    <summary className="Lowsummary" ></summary>
//    <p className="HiddenText"></p>
//</summary>