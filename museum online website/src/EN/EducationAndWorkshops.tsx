import React, { useEffect } from 'react';
import Header from './Reusable/Header.tsx';
import Footer from './Reusable/Footer.tsx';

//CSS
import '../Reusable/PageStyle.css';
import './CSS/EducationAndWorkshops.css';

const EducationAndWorkshops: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum | EducationAndWorkshops';
    }, []);

    return (
        <>
            <Header />

            <main className="EducationAndWorkshops">
                <h1>Dagje weg?</h1>

                <p>
                    We put all your options on this page here. There's a fun experience for everyone!
                </p>

                <div className="Groepsbezoek">

                    <h1>Group booking</h1>

                    <p>
                        Special moments are best when they're shared! Visit our exhibitions with friends or teammates and be inspired by entirely new dimensions.
                        Delve into art installations that fuse creative ideas with technological innovation. 
                        A visit to Nxt will mesmerise the mind and provide inspiration and creative boost for you, your mates or team. 
                        <a href="./Tickets" title="Order your tickets" target="_blank">Go to tickets</a>
                        <a href="./OverNxt" title="More about Nxt">About us</a>
                        <a href="./Faq" title="Frequently asked questions">Faq</a>
                    </p>
                </div>

                <div className="Educatie">

                    <h1>Excursies voor scholen</h1>

                    <p>
                        We opened our exhibitions for schools and students.
                        Let Nxt be your peek into the future, where you can see ideas take of our modern world take shape.
                        Dive into interactive and inspiring presentations, take a look at <a href="./OverNxt" title="About our exhibitions">Exhibitions</a> and drift off.

                        <a href="./Tickets" title="Hbo, mbo en universiteit">School booking</a> for mbo-, hbo- and universitaire students
                        Or are you visiting with a schoolclass?
                        <a href="./Tickets" title="Basis- en middelbarescholen"> Here </a> you can book your tickets for students of primaryt- and secondary education.
                    </p>
                </div>

                <div className="Workshops">

                    <h1> Workshops </h1>

                    <p>
                        Within this space, we invite all thinkers, makers, listeners, creators and destroyers to join us in our quest to seek,
                        show and debate what’s next. We aim to facilitate learning in the fields of createch, empowering our community with new skills.
                        We have two workshops on offer for companies and school groups, at a time and date that suits you.
                    </p>
                    <h4>Our workshops</h4>
                    <ul>
                        <li>
                            <p>
                                <a href="WorkshopSlowLooking">Slow Looking</a>
                                The Slow Looking Workshop is an exercise to slow down the ways in which we look at the world around us and how this practice can support deep
                                learning across subject matters.
                            </p>
                        </li>
                        <li>
                            <p>
                                <a href="WorkshopFilterCreation">Filter Creation</a>
                                We all know and use them: Augmented Reality Filters. In this workshop you will learn how to create your very own filter to tell your story in an AR environment.
                            </p>
                        </li>
                        <li>
                            <p>
                                <a href="WorkshopCustomisedChange">Customised Change</a>
                                Sometimes, something has to happen to spark your energy, get you inspired and motivate you to take action. 
                                We believe in the power of art to have this effect.
                                It breaks through your everyday thought patterns and creates space for new perspectives.
                                And we ask the questions that count, too. The goal: a new mindset to facilitate sustainable change.
                            </p>
                        </li>
                        <li>
                            <p>
                                <a href="WorkshopToekomstverkenning">Explore The Future</a>
                                To gain insights into the future, exploring art can serve as a foundation for teams to bridge the gap between the present and what lies ahead.
                            </p>
                        </li>
                    </ul>
                </div>
            </main >

            <Footer />
        </>
    );
};

export default EducationAndWorkshops;