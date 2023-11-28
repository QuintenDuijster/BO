import React from 'react';
import Header from '../Herbruikbaar/Header.tsx';
import Footer from '../Herbruikbaar/Footer.tsx';

const FAQ: React.FC = () => {
    return (
        <div className="Faq">

            <Header />
            <main>
                <div className="Faq">
                    <h1>Frequently Asked Questions</h1>
                    <p>Here you can find our frequently asked questions</p>

                    <div className="Tickets">
                    <details>
                        <summary className="Highsummary" >Tickets</summary>
                        <p className="InfoTickets">Here you can find our most asked questions about our tickets</p>
                        <div className="Info">
                            <details>
                                    <summary className="Lowsummary" >Can I get a ticket at the door?</summary>
                                <p className="HiddenText">
                                        No, tickets to Nxt Museum can solely be purchased online via our ticket shop.
                                        Online bookings enable us to keep track of the amount of people in the space to ensure the best experience for each visitor.
                                        We offer IDeal, Visa, Mastercard, Sofort Payment, Bancontact, Vpay, Alipay as payment offers in our ticket shop
                                </p>
                                </details>
                            <details>
                                    <summary className="Lowsummary" >Can I get a refund on my ticket?</summary>
                                <p className="HiddenText">
                                        No, we don’t refund tickets. We offer the opportunity to change your time slot up to 4 hours ahead of your booking, if you really cannot make it.
                                        Please go to our ticket support to make the change to your booking.
                                </p>
                                </details>
                            <details>
                                    <summary className="Lowsummary" >I booked too many tickets. Can I get a refund?</summary>
                                <p className="HiddenText">
                                        You are not eligible for a refund if you book too many tickets. However you can rebook these tickets for an alternative date.
                                        To do so head to our ticket support.
                                </p>
                                </details>
                            <details>
                                    <summary className="Lowsummary" >Can I get a payment receipt for my ticket(s)?</summary>
                                <p className="HiddenText">
                                        No, unfortunately our ticketing system does not allow creating an invoice for this type of ticket.
                                        A booking overview is shared in your confirmation email, along with your tickets.
                                </p>
                                </details>
                            <details>
                                    <summary className="Lowsummary" >I am an (international) student, can I buy a student ticket?</summary>
                                <p className="HiddenText">
                                        Yes you can! Local and International students must bring proof of current enrolment at their university
                                        (for example Studielink for Dutch students) to show upon entering the museum.
                                </p>
                                </details>
                            <details>
                                    <summary className="Lowsummary" >Can I enter Nxt Museum with an ICOM/ Museum Jaarkaart card ?</summary>
                                <p className="HiddenText">
                                        The ICOM / Museum cards (Museum Jaarkaart) are not valid at Nxt Museum. Nxt Museum operates independent from any form of subsidy.
                                </p>
                                </details>
                            <details>
                                    <summary className="Lowsummary" >I own a Stadspas where can I book my ticket?</summary>
                                <p className="HiddenText">
                                        Stadspas tickets can be booked here. You can book one ticket per Stadspas, it is not possible to bring a guest free of charge.
                                        If you are coming with a regular ticket holder book your stadspas ticket first to ensure that you can enter the museum together.
                                        Be sure to bring your valid Stadspas to show on the door.In case the card is not valid at the time of the visit, the full ticket price needs to be paid at the entrance.
                                </p>
                                </details>
                            <details>
                                    <summary className="Lowsummary" >How to visit Nxt Museum with the Iamsterdam City Card?</summary>
                                <p className="HiddenText">
                                        Book your tickets in advance via our ticketshop. Upon entering the museum, please bring your City Card.
                                        Make sure your City Card is valid at the time of your visit.
                                        If the card is not valid at the time of the visit, the full ticket price needs to be paid at the entrance.
                                </p>
                                </details>
                            <details>
                                    <summary className="Lowsummary" >Can you put me on a cancellation list in case a day is sold out?</summary>
                                <p className="HiddenText">
                                        We do not have a cancellation list, hence it’s not an option.
                                </p>
                                </details>
                            <details>
                                    <summary className="Lowsummary" >How do I take advantage of dynamic ticket prices?</summary>
                                <p className="HiddenText">
                                        Standard Adult Ticket prices vary based on time slot and start from €20.50 up to €24,75.
                                        We offer a special rate during early and late time slots during the weekdays.
                                </p>
                                </details>
                            <details>
                                    <summary className="Lowsummary" >Can I re-visit Nxt Museum with my MuseumNacht ticket?</summary>
                                <p className="HiddenText">
                                        You cannot visit Nxt Museum with your museumnacht ticket after Museumnacht itself (5th Nov). This offer is only applicable for museums that accept Museumcard.
                                </p>
                                </details>
                            </div>  
                        </details>
                    </div>
                    <div className="GroupBooking">
                    <details>
                            <summary className="Highsummary">School and Group visit</summary>
                        <p className="InfoGroupBooking">Here you can find our most asked questions about visiting in a group</p>
                        <div className="Info">
                            <details>
                                    <summary className="Lowsummary" >How can I arrange a group booking to Nxt Museum?</summary>
                                    <p className="HiddenText">For groups of more than 10 people – whether you’re from a business, or just a group of friends – use the Group Booking Tool here.
                                        Group bookings must be made at least 2 weeks in advance of your visit. We’ll get back to you as soon as we can, usually that takes us about 4-5 days.</p>
                                </details>
                            <details>
                                    <summary className="Lowsummary" >How can I book a visit for my students or organise a school visit?</summary>
                                    <p className="HiddenText">You can easily book a visit for your students via our school booking tool. Be sure to book your tickets 2 weeks in advance of your visit.
                                        We also accept the Cultuurkaart!
                                        We’ll get back to you as soon as we can, usually that takes us about 4-5 days.</p>
                                </details>
                            <details>
                                    <summary className="Lowsummary" >What workshops do you offer for schools?</summary>
                                    <p className="HiddenText">We currently offer two workshops for schools – slow looking, and face filter creation. Find more information here.</p>
                                </details>
                            </div>
                        </details>
                    </div>
                    <div className="Accessibility">
                    <details>
                            <summary className="Highsummary">Visitor care: ability & access</summary>
                        <p className="InfoAccessibility">Our most asked questions about visitor care</p>
                        <div className="Info">
                            <details>
                                    <summary className="Lowsummary" >Can I enter Nxt Museum’s exhibition if I have epilepsy?</summary>
                                    <p className="HiddenText">This exhibition contains flashing video images and loud sounds which may not be suitable for people with epilepsy.</p>
                                </details>
                            <details>
                                    <summary className="Lowsummary" >Is the museum accessible for wheelchairs?</summary>
                                    <p className="HiddenText">Yes, the exhibition, restaurant and toilets are accessible via wheelchair ramps or alternative routes.
                                        We also have disabled parking slots which may be booked upon reservation by leaving us a message here.</p>
                                </details>
                            <details>
                                    <summary className="Lowsummary" >Disabled Parking Spots</summary>
                                    <p className="HiddenText">We have disabled parking slots at the museum which may be booked upon reservation by leaving us a message here.</p>
                                </details>
                            <details>
                                    <summary className="Lowsummary" >Do you offer companion tickets?</summary>
                                    <p className="HiddenText">Visitors who are unable to navigate their way through the museum independently can bring a companion with them for free.
                                        Please get in touch via our contact form </p>
                                </details>
                            <details>
                                    <summary className="Lowsummary" >Is the museum suitable for children?</summary>
                                    <p className="HiddenText">When it comes to the youngest amongst us, Nxt Museum is enjoyed by children of all age groups.
                                        However, many of our artworks and installations are housed within dark rooms with loud sounds, some strong language, nudity, and flashing videos.
                                        Be aware: one artwork in this exhibition contains sexual scenes and nudity. Please keep this in mind when considering if you’d like to bring young children.</p>
                                </details>
                            <details>
                                    <summary className="Lowsummary" >From what age can my kids visit Nxt, unaccompanied by an adult?</summary>
                                    <p className="HiddenText">Children from the age of 12 may visit the Museum without being accompanied by an adult. However, they cannot supervise young children.
                                        Parents and guardians of unaccompanied children aged 12 to 18 are responsible and accountable for the behaviour of their children at all times.</p>
                                </details>
                            </div>
                        </details>
                    </div>
                    <div className="Museum">
                    <details>
                        <summary className="Highsummary">In het museum</summary>                        {/*HIER GEBLEVEN*/}
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