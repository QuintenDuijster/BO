import React from 'react';
import '../css/Footer.css';
import '../Herbruikbaar/pageStyle.css';

const Footer: React.FC = () => 
{
    return (
        <footer>
            <nav>
                <ul>
                    <li><a className="hoverLink" href="#test"><h3>OverNxt</h3></a></li>
                    <li><a className="hoverLink" href="#test">Reviews</a></li>
                    <li><a className="hoverLink" href="#test">Ons team</a></li>
                    <li><a className="hoverLink" href="#test">Eten en Drinken</a></li>
                    <li><a className="hoverLink" href="#test">Onze huisregels</a></li>
                </ul>
                <ul>
                    <li><a className="hoverLink" href="#test"><h3>Uitjes</h3></a></li>
                    <li><a className="hoverLink" href="#test">Bedrijfuitje</a></li>
                    <li><a className="hoverLink" href="#test">Educatie</a></li>
                    <li><a className="hoverLink" href="#test">Workshop</a></li>
                </ul>
                <ul>
                    <li><a className="hoverLink" href="#test"><h3>Contact</h3></a></li>
                    <li><a className="hoverLink" href="#test">Routeomschrijving</a></li>
                    <li><a className="hoverLink" href="#test">Contactgegevens</a></li>
                </ul>
                <ul>
                    <li><a className="hoverLink" href="#test"><h3>Faq</h3></a></li>
                    <li><a className="hoverLink" href="#test"><h3>Tickets</h3></a></li>
                </ul>
            </nav>

            <div className="information">
                <ul>
                    <li className="Line"></li>
                    <li><h3>Address</h3></li>
                    <li><p>Asterweg 22 <br /> 1031 HP Amsterdam</p></li>
                </ul>
                <ul>
                    <li className="Line"></li>
                    <li><h3>Neem contact op</h3></li>
                    <li><p>Telefoonnummer: <br /> 727-425-2760 <br /> Email: <br /> info@nxtmuseum.com</p></li>
                </ul>
                <ul>

                    <li><h3>Volg Nxt</h3></li>
                    <li><a>Instagram</a></li>
                    <li><a>Youtube</a></li>
                    <li><a>TikTok</a></li>
                    <li><a>Twitter</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;