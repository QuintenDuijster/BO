import React from 'react';
import '../Herbruikbaar/pageStyle.css';
import '../css/Footer.css';


const Footer: React.FC = () => 
{
    return (
        <footer>
            <nav>
                <ul>
                    <li><a className="hoverLink" href="OverNxt"><h3>OverNxt</h3></a></li>
                    <li><a className="hoverLink" href="OverNxt?section=OnsTeam">Ons team</a></li>
                    <li><a className="hoverLink" href="OverNxt?section=EtenenDrinken">Eten en Drinken</a></li>
                    <li><a className="hoverLink" href="OverNxt?section=OnzeHuisregels">Onze huisregels</a></li>
                </ul>
                <ul>
                    <li><a className="hoverLink" href="Uitjes"><h3>Uitjes</h3></a></li>
                    <li><a className="hoverLink" href="Uitjes?section=Bedrijfsuitjes">Bedrijfsuitje</a></li>
                    <li><a className="hoverLink" href="Uitjes?section=Educatie">Educatie</a></li>
                    <li><a className="hoverLink" href="Uitjes?section=Workshops">Workshops</a></li>
                </ul>
                <ul>
                    <li><a className="hoverLink" href="Contact"><h3>Contact</h3></a></li>
                    <li><a className="hoverLink" href="Contact?section=Vacatures">Vacatures</a></li>
                    <li><a className="hoverLink" href="Contact?section=PartnerWorden">Partner worden</a></li>
                    <li><a className="hoverLink" href="Contact?section=Pers">Pers</a></li>
                </ul>
                <ul>
                    <li><a className="hoverLink" href="Faq"><h3>Faq</h3></a></li>
                    <li><a className="hoverLink" href="Tickets"><h3>Tickets</h3></a></li>
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
                    <li className="Line"></li>
                    <li><h3>Volg Nxt</h3></li>
                    <li><a href="https://www.instagram.com/nxtmuseum/" target="_blank">Instagram</a></li>
                    <li><a href="https://www.youtube.com/channel/UC1Afhs22rJqLfblV4GOpFTA" target="_blank">Youtube</a></li>
                    <li><a href="https://www.tiktok.com/@nxtmuseum?" target="_blank">TikTok</a></li>
                    <li><a href="https://twitter.com/nxtmuseum" target="_blank">Twitter</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;