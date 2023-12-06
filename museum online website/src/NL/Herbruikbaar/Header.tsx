import React from 'react';
import '../../Reusable/pageStyle.css';
import '../../Reusable/hoverLink.css';
import './CSS/Header.css';

const Header: React.FC = () => 
{
    return (
        <header>
            <nav>
                <ul className="Left">
                    <li>
                        <a className="Logo" href="http://localhost:5173/NL">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 80 80"
                                width="60"
                                height="60"
                            >
                                <path
                                    d="M72.1,72l-3-3V6.7h-0.5C51.6,6.8,37.7,20.3,37.1,37l0,0c0.1-19.2,15.7-34.9,35-35.3V72z M41.1,52.7v-1.8l0,0	V52.7z M1.1,72.7V2.4l5,5v62.3h30v3H1.1z M13.1,14.4l5,5v42.3h18v3h-23C13.1,64.7,13.1,14.4,13.1,14.4z M36.1,49.7v3h-5V32.4l5,5	v0.3V49.7z M25.1,26.4l5,5v22.3h6v1.4v1.6h-11C25.1,56.7,25.1,26.4,25.1,26.4z M19.1,20.4l5,5v32.3h12v3h-17	C19.1,60.7,19.1,20.4,19.1,20.4z M56.1,56l-3-3V30.7h-0.5c-5.9,0-10.9,4.6-11.4,10.4L41.1,41c0.1-8.2,6.8-15,15-15.3V56z M48.5,36.7	c-3.2,0-5.9,2.3-6.4,5.4V42c0.1-5.5,4.5-10,10-10.3V52l-3-3V36.7H48.5z M48.1,48l-5-5c0.1-2.8,2.3-5,5-5.3V48z M60.1,60l-3-3V24.7	h-0.5c-8.7,0-15.8,6.8-16.5,15.3l0,0c0.1-11,9-20,20-20.3V60z M64.1,64l-3-3V18.7h-0.5C49.1,18.8,39.7,27.8,39.1,39l0,0	c0.1-13.7,11.2-25,25-25.3V64z M7.1,8.4l5,5v52.3h24v3h-29L7.1,8.4z M68.1,68l-3-3V12.7h-0.5C50.3,12.8,38.7,24,38.1,38l0,0	c0.1-16.5,13.5-29.9,30-30.3V68z M72.5,0.7C52.8,0.8,36.7,16.5,36.1,36L6.1,6l-6-6v73.7h37v-4h1v-4l0,0h1v-4h1v-4h1v-4h1v-5.3	l22,22l0,0l4,4l4,4V0.7H72.5z"
                                    fill="white"
                                />
                            </svg>
                            <p>Nxt Museum</p>
                        </a>
                    </li>
                    <li className="dropdown">
                        <span><a href="/NL/BezoekersInformatie">Bezoekers informatie</a></span>
                        <ul className="dropdown-content">
                            <li><a href="/NL/BezoekersInformatie">Openingstijden</a></li>
                            <li><a href="/NL/BezoekersInformatie">Roete beschrijving</a></li>
                            <li><a href="/NL/BezoekersInformatie">Groepsbezoek</a></li>
                            <li><a href="/NL/BezoekersInformatie">Prive museumervaring</a></li>
                            <li><a href="/NL/BezoekersInformatie">Begleide tour</a></li>
                            <li><a href="/NL/BezoekersInformatie">Bezoekers voorwaarden</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <span><a href="/NL/Contact">Contact</a></span>
                        <ul className="dropdown-content">
                            <li><a href="/NL/Contact">Plan een evenement</a></li>
                            <li><a href="/NL/Contact">Werk met ons samen</a></li>
                            <li><a href="/NL/Contact">Creatieve samenwerking</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <span><a href="/lNL/EducatieEnWorkshops">Educatie en workshops</a></span>
                        <ul className="dropdown-content">
                            <li><a href="/NL/EducatieEnWorkshops">Onderwijs</a></li>
                            <li><a href="/NL/EducatieEnWorkshops">Workshops</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <span><a href="/NL/WatIsLive">Wat is live</a></span>
                        <ul className="dropdown-content">
                            <li><a href="/NL/WatIsLive">Nxt blog</a></li>
                            <li><a href="/NL/WatIsLive">Tentoonstellingen</a></li>
                            <li><a href="/NL/WatIsLive">Evenementen</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <span><a href="/NL/WatIsLive">Faq</a></span>
                        <ul className="dropdown-content">
                            <li><a href="/NL/WatIsLive">Faq</a></li>
                            <li><a href="/NL/WatIsLive">Form</a></li>
                        </ul>
                    </li>
                </ul>
                <ul className="Right">
                    <li>
                        <a href="#">NL | ENG</a>
                    </li>
                    <li>
                        <a href="/NL/Kaartjes">Kaartjes</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;