import React, { useEffect } from 'react';
import Header from './Reusable/Header.tsx';
import Footer from './Reusable/Footer.tsx';

//CSS
import '../Reusable/PageStyle.css';
import './CSS/VisitorInformation.css';


const VisitorInformation: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum | VisitorInformation';
    }, []);

    return (
        <>
            <Header />


            <main className="VisitorInformation">
                <article>
                    <h2>To eat & drink</h2>
                    <p>Café Restaurant Metro is open daily for breakfast and lunch and for drinks and dinner on Wednesday - Sunday.</p>
                    <a href="https://caferestaurantmetro.nl/" target="_blank">Reserve your table</a>
                </article>
                <article>
                    <h2>Opening hours</h2>
                    <ul>
                        <li>Monday: gesloten</li>
                        <li>Tuesday: 10:30 - 20:30</li>
                        <li>Wednesday: 11:00 - 21:30</li>
                        <li>Thursday: 10:30 - 22:30</li>
                        <li>Friday: gesloten</li>
                        <li>Saturday: 10:30 - 20:30</li>
                        <li>Sunday: 10:30 - 22:30</li>
                    </ul>
                </article>
                <article>
                    <h2>Special Opening Hours:</h2>
                    <ul>
                        <li>24 december: 10:30 - 17:30</li>
                        <li>25 december: gesloten</li>
                        <li>26 december: 12:00 - 21:00 c</li>
                        <li>1 january: 12:00 - 21:00 </li>
                        <li>31 january: 10:30 - 17:00 </li>
                    </ul>
                </article>
                <article>
                    <image></image>
                    <h2>Directions</h2>
                    <details>
                        <summary>Can I travel to Nxt Museum by car?</summary>
                        <p>Parking is not allowed on the premises of Nxt Museum and very limited parking is possible in the neighbourhood. We encourage visitors to visit the museum by bike, on foot or using Amsterdam’s electric shared transportation. </p>
                    </details>
                    <details>
                        <summary>From De Pijp</summary>
                        <p>Approximately 30m minutes by metro, take Metro line 52 four stops towards Noord/ North and exit at Noorderpark station (only one stop away). Nxt Museum is a 10 minute walk from Noorderpark.</p>
                    </details>
                    <details>
                        <summary>From Museumplein</summary>
                        <p>Walk ten minutes to Vijzelgracht metro station and take Metro line 52 towards Noord/ North. Exit at Noorderpark station after 3 stops. Nxt Museum is a 10-minute walk from Noorderpark Metro station.</p>
                    </details>
                    <details>
                        <summary>From Amsterdam central station</summary>
                        <p>It’s a 10-minute bike ride or 20-minute walk from Amsterdam central station. Simply take the ferry to Buiksloterweg (located at the rear of the station). After a 5-minute crossing it’s just a short walk or cycle to Asterweg 22.</p>
                    </details>
                </article>
                <article>
                    <h2>Group visit</h2>
                    <p>
                        Book your tickets for group visits here.
                        Please be sure to book your tickets 2 weeks in advance of your visit.

                        After you've reserved your date and time to visit Nxt, you can either pay online or via invoice, in step 8.

                    </p>
                    <a>Group booking</a>
                </article>
                <article>
                    <h2>Private Museum Experience</h2>
                    <h3>Your chance to take over the museum!</h3>
                    <p>
                        Book a private time slot and enjoy our premium museum experience from September 27. Gather your own personal VIPs for a transformative cultural outing and have our brand new exhibition all to yourselves.
                    </p>

                    <h3>Everything you need to know:</h3>
                    <p>
                        - The entire museum for yourself, or your group (max 25 VIPs) for an hour
                        - A personal tour of the museum with a dedicated guide 
                    </p>

                    <h3>When can you book your private visit?</h3>
                    <p>
                        From Thursday 'til Saturday:
                        Morning Visit: 10:00 – 11:00
                        Evening Visit: 22:30 – 23:30
                    </p>
                    <a>Book your ticket</a>
                </article>
                <article>
                    <h2>Guided Tours</h2>
                    <h3>Dive Deeper</h3>
                    <p>
                        Discover new perspectives with our guided tour of UFO - Unidentified Fluid Other. Join our expert guide to uncover behind-the-scenes insights into the artist’s process and the exhibition.
                    </p>

                    <h3>Good to know</h3>
                    <p>
                        — Price: 5€ per person
                        (+ entrance ticket)
                        — Duration: 60 - 90 minutes
                        — Language: English
                        — Available Mondays & Wednesdays: 11:00 and 14:00 
                    </p>

                    <h3>Book a tour</h3>
                    <p>
                        Book a guided tour and fully grasp the significance of the art and technology in the exhibition and in our evolving world.
                    </p>
                    <a>Book your tour </a>
                </article>
                <a>visitor terms</a>
            </main>

            <Footer />
        </>
    );
};

export default VisitorInformation;